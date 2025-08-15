import { payload } from '@/lib/payload';

export async function reset() {
  await payload.delete({
    collection: 'platform',
    where: { id: { exists: true } },
  });

  await payload.delete({
    collection: 'platformType',
    where: { id: { exists: true } },
  });

  await payload.delete({
    collection: 'theme',
    where: { id: { exists: true } },
  });

  await payload.delete({
    collection: 'store',
    where: { id: { exists: true } },
  });

  await payload.delete({
    collection: 'genre',
    where: { id: { exists: true } },
  });

  await payload.delete({
    collection: 'ageRating',
    where: { id: { exists: true } },
  });

  await payload.delete({
    collection: 'ageRatingAuthority',
    where: { id: { exists: true } },
  });

  await payload.delete({
    collection: 'company',
    where: { id: { exists: true } },
  });

  await payload.delete({
    collection: 'country',
    where: { id: { exists: true } },
  });

  await payload.delete({
    collection: 'continent',
    where: { id: { exists: true } },
  });

  await payload.delete({
    collection: 'media',
    where: { id: { exists: true } },
  });

  await payload.delete({
    collection: 'user',
    where: { id: { exists: true } },
  });
}
