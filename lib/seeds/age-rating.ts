import ageRatingData from '@/lib/data/age-rating.json' with { type: 'json' };
import { payload } from '@/lib/payload';

export async function ageRatingSeed() {
  await Promise.all(
    ageRatingData.map((item) =>
      payload.create({
        collection: 'ageRating',
        data: {
          id: item.id,
          authority: item.authorityId,
          name: item.name,
          description: item.name,
          logo: item.mediaId,
        },
      })
    )
  );
}
