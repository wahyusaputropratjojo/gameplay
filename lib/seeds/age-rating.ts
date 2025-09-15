import ageRatingData from '@/lib/data/age-rating.json' with { type: 'json' };
import { payload } from '@/lib/payload';

export async function ageRatingSeed() {
  if (ageRatingData && ageRatingData.length > 0) {
    await Promise.all(
      ageRatingData.map((item) =>
        payload.create({
          collection: 'ageRating',
          data: {
            authority: item.authorityId,
            description: item.description,
            id: item.id,
            logo: item.mediaId,
            name: item.name,
          },
        })
      )
    );
  }
}
