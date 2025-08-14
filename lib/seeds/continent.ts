import continentData from '@/lib/data/continent.json' with { type: 'json' };
import { payload } from '@/lib/payload';

export async function continentSeed() {
  await Promise.all(
    continentData.map((item) =>
      payload.create({
        collection: 'continent',
        data: {
          id: item.id,
          name: item.name,
        },
      })
    )
  );
}
