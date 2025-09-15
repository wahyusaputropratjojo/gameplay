import path from 'node:path';
import countryFlagData from '@/lib/data/country-flag.json' with {
  type: 'json',
};
import { payload } from '@/lib/payload';

export async function countryFlagSeed() {
  if (countryFlagData && countryFlagData.length > 0) {
    await Promise.all(
      countryFlagData.map((item) =>
        payload.create({
          collection: 'countryFlag',
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
