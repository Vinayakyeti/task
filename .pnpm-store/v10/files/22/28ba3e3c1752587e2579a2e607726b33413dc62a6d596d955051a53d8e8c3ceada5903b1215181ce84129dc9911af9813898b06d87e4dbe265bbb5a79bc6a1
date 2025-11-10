import { cache } from 'react';
export const getNavPrefs = cache(async (payload, userID, userSlug) => {
  return userSlug ? await payload.find({
    collection: 'payload-preferences',
    depth: 0,
    limit: 1,
    pagination: false,
    where: {
      and: [{
        key: {
          equals: 'nav'
        }
      }, {
        'user.relationTo': {
          equals: userSlug
        }
      }, {
        'user.value': {
          equals: userID
        }
      }]
    }
  })?.then(res => res?.docs?.[0]?.value) : null;
});
//# sourceMappingURL=getNavPrefs.js.map