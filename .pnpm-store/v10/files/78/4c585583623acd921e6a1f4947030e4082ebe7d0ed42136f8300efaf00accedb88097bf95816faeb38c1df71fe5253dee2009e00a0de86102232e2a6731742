import { logError } from 'payload';
export async function getLatestVersion(args) {
  const {
    slug,
    type = 'collection',
    locale,
    overrideAccess,
    parentID,
    payload,
    req,
    status
  } = args;
  const and = [{
    'version._status': {
      equals: status
    }
  }];
  if (type === 'collection' && parentID) {
    and.push({
      parent: {
        equals: parentID
      }
    });
  }
  try {
    const sharedOptions = {
      depth: 0,
      limit: 1,
      locale,
      overrideAccess,
      req,
      sort: '-updatedAt',
      where: {
        and
      }
    };
    const response = type === 'collection' ? await payload.findVersions({
      collection: slug,
      ...sharedOptions
    }) : await payload.findGlobalVersions({
      slug,
      ...sharedOptions
    });
    if (!response.docs.length) {
      return null;
    }
    return {
      id: response.docs[0].id,
      updatedAt: response.docs[0].updatedAt
    };
  } catch (err) {
    logError({
      err,
      payload
    });
    return null;
  }
}
//# sourceMappingURL=getLatestVersion.js.map