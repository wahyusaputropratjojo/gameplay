import countryData from '@/lib/data/country.json' with { type: 'json' };
import { payload } from '@/lib/payload';

export async function countrySeed() {
  await Promise.all(
    countryData.map((item) =>
      payload.create({
        collection: 'country',
        data: {
          name: item.name,
          continent: item.continentId,
        },
      })
    )
  );
}
