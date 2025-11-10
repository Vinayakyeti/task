import { getPayload } from 'payload'
import config from '@payload-config'
import { NextRequest, NextResponse } from 'next/server'

interface DateEntry {
  startDate: string
  endDate: string
  id?: string
}

interface EventItem {
  title: string
  startDate: string
  endDate: string
  doc: {
    relationTo: 'seminars' | 'webinars'
    value: string | number
  }
}

/**
 * GET /api/events
 * 
 * Fetches all upcoming webinar and seminar dates and returns them as a flat list.
 * Requires authentication.
 * 
 * Returns: Array of event objects with title, dates, and document reference
 */
export async function GET(request: NextRequest) {
  try {
    // Get Payload instance
    const payload = await getPayload({ config })

    // Check authentication - verify user is logged in
    const { user } = await payload.auth({ headers: request.headers })

    if (!user) {
      return NextResponse.json(
        { error: 'Unauthorized. You must be logged in to access events.' },
        { status: 401 }
      )
    }

    const now = new Date().toISOString()
    const events: EventItem[] = []

    try {
      // Fetch all seminars
      const seminars = await payload.find({
        collection: 'seminars',
        limit: 1000, // Adjust if you expect more
        depth: 0, // Don't populate relationships
      })

      // Process seminars and extract upcoming dates
      for (const seminar of seminars.docs) {
        if (seminar.dates && Array.isArray(seminar.dates)) {
          for (const dateEntry of seminar.dates as DateEntry[]) {
            // Only include future dates
            if (dateEntry.startDate && new Date(dateEntry.startDate) > new Date(now)) {
              events.push({
                title: seminar.title as string,
                startDate: dateEntry.startDate,
                endDate: dateEntry.endDate,
                doc: {
                  relationTo: 'seminars',
                  value: seminar.id,
                },
              })
            }
          }
        }
      }

      // Fetch all webinars
      const webinars = await payload.find({
        collection: 'webinars',
        limit: 1000, // Adjust if you expect more
        depth: 0, // Don't populate relationships
      })

      // Process webinars and extract upcoming dates
      for (const webinar of webinars.docs) {
        if (webinar.dates && Array.isArray(webinar.dates)) {
          for (const dateEntry of webinar.dates as DateEntry[]) {
            // Only include future dates
            if (dateEntry.startDate && new Date(dateEntry.startDate) > new Date(now)) {
              events.push({
                title: webinar.title as string,
                startDate: dateEntry.startDate,
                endDate: dateEntry.endDate,
                doc: {
                  relationTo: 'webinars',
                  value: webinar.id,
                },
              })
            }
          }
        }
      }

      // Sort events by startDate ascending (soonest first)
      events.sort((a, b) => {
        const dateA = new Date(a.startDate).getTime()
        const dateB = new Date(b.startDate).getTime()
        return dateA - dateB
      })

      // Return the events
      return NextResponse.json(events, { status: 200 })

    } catch (error) {
      console.error('Error fetching events:', error)
      return NextResponse.json(
        {
          error: 'Failed to fetch events from database',
          details: error instanceof Error ? error.message : 'Unknown error',
        },
        { status: 500 }
      )
    }

  } catch (error) {
    console.error('Unexpected error in events endpoint:', error)
    return NextResponse.json(
      {
        error: 'Internal server error',
        details: error instanceof Error ? error.message : 'Unknown error',
      },
      { status: 500 }
    )
  }
}
