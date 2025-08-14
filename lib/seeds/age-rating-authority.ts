import ageRatingAuthorityData from '@/lib/data/age-rating-authority.json' with {
  type: 'json',
};
import { payload } from '@/lib/payload';

export async function ageRatingAuthoritySeed() {
  await Promise.all(
    ageRatingAuthorityData.map((item) =>
      payload.create({
        collection: 'ageRatingAuthority',
        data: {
          name: item.name,
          id: item.id,
        },
      })
    )
  );
}
