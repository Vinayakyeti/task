import { getPayload } from 'payload'
import config from '@payload-config'
import { NextRequest, NextResponse } from 'next/server'
import Parser from 'rss-parser'

interface RSSItem {
  title?: string
  guid?: string
  pubDate?: string
  link?: string
  contentSnippet?: string
  content?: string
  description?: string
}

/**
 * POST /api/sync-podcast-episodes
 * 
 * Syncs podcast episodes from an RSS feed URL.
 * Requires authentication.
 * 
 * Body: { "feedUrl": "https://example.com/feed/mp3" }
 * 
 * Returns: { "success": true, "newEpisodes": number, "skippedEpisodes": number }
 */
export async function POST(request: NextRequest) {
  try {
    // Get Payload instance
    const payload = await getPayload({ config })

    // Check authentication - verify user is logged in
    const { user } = await payload.auth({ headers: request.headers })

    if (!user) {
      return NextResponse.json(
        { error: 'Unauthorized. You must be logged in to sync podcast episodes.' },
        { status: 401 }
      )
    }

    // Parse request body
    let body
    try {
      body = await request.json()
    } catch (e) {
      return NextResponse.json(
        { error: 'Invalid JSON in request body' },
        { status: 400 }
      )
    }

    const { feedUrl } = body

    // Validate feed URL
    if (!feedUrl || typeof feedUrl !== 'string') {
      return NextResponse.json(
        { error: 'Missing or invalid "feedUrl" parameter in request body' },
        { status: 400 }
      )
    }

    // Validate URL format
    try {
      new URL(feedUrl)
    } catch (e) {
      return NextResponse.json(
        { error: 'Invalid URL format for feedUrl' },
        { status: 400 }
      )
    }

    // Parse RSS feed
    const parser = new Parser()
    let feed
    
    try {
      feed = await parser.parseURL(feedUrl)
    } catch (error) {
      console.error('RSS parsing error:', error)
      return NextResponse.json(
        { 
          error: 'Failed to parse RSS feed. Please check the URL and try again.',
          details: error instanceof Error ? error.message : 'Unknown error'
        },
        { status: 400 }
      )
    }

    if (!feed.items || feed.items.length === 0) {
      return NextResponse.json(
        { 
          success: true, 
          message: 'No episodes found in the RSS feed',
          newEpisodes: 0,
          skippedEpisodes: 0
        },
        { status: 200 }
      )
    }

    // Process episodes
    let newEpisodes = 0
    let skippedEpisodes = 0
    const errors: string[] = []

    for (const item of feed.items as RSSItem[]) {
      // Extract episode data
      const guid = item.guid
      const title = item.title
      const pubDate = item.pubDate
      const link = item.link
      const description = item.contentSnippet || item.content || item.description || ''

      // Validate required fields
      if (!guid || !title || !pubDate || !link) {
        errors.push(`Skipping episode "${title || 'Unknown'}" - missing required fields`)
        skippedEpisodes++
        continue
      }

      try {
        // Check if episode already exists by podigeeGuid
        const existingEpisode = await payload.find({
          collection: 'podcast-episodes',
          where: {
            podigeeGuid: {
              equals: guid,
            },
          },
          limit: 1,
        })

        if (existingEpisode.docs.length > 0) {
          // Episode already exists, skip it
          skippedEpisodes++
          continue
        }

        // Create new episode
        await payload.create({
          collection: 'podcast-episodes',
          data: {
            title,
            podigeeGuid: guid,
            pubDate: new Date(pubDate).toISOString(),
            link,
            description,
          },
        })

        newEpisodes++
      } catch (error) {
        console.error(`Error processing episode "${title}":`, error)
        errors.push(`Failed to create episode "${title}": ${error instanceof Error ? error.message : 'Unknown error'}`)
        skippedEpisodes++
      }
    }

    // Return success response
    return NextResponse.json(
      {
        success: true,
        message: `Successfully synced podcast episodes`,
        newEpisodes,
        skippedEpisodes,
        totalProcessed: feed.items.length,
        errors: errors.length > 0 ? errors : undefined,
      },
      { status: 200 }
    )

  } catch (error) {
    console.error('Unexpected error in sync-podcast-episodes:', error)
    return NextResponse.json(
      {
        error: 'Internal server error',
        details: error instanceof Error ? error.message : 'Unknown error',
      },
      { status: 500 }
    )
  }
}
