import path from 'node:path';
import ageRatingLogoData from '@/lib/data/age-rating-logo.json' with {
  type: 'json',
};
import { payload } from '@/lib/payload';

export async function ageRatingLogoSeed() {
  if (ageRatingLogoData && ageRatingLogoData.length > 0) {
    await Promise.all(
      ageRatingLogoData.map((item) =>
        payload.create({
          collection: 'ageRatingLogo',
          data: {
            alt: item.alt,
            id: item.id,
          },
          filePath: path.resolve(item.filePath),
        })
      )
    );
  }
}
