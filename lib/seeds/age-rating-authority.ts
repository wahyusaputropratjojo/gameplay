import ageRatingAuthorityData from '@/lib/data/age-rating-authority.json' with {
  type: 'json',
};
import { payload } from '@/lib/payload';

export async function ageRatingAuthoritySeed() {
  if (ageRatingAuthorityData && ageRatingAuthorityData.length > 0) {
    await Promise.all(
      ageRatingAuthorityData.map((item) =>
        payload.create({
          collection: 'ageRatingAuthority',
          data: {
            id: item.id,
            name: item.name,
          },
        })
      )
    );
  }
}
