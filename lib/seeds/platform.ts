import platformData from '@/lib/data/platform.json' with { type: 'json' };
import { payload } from '@/lib/payload';

export async function platformSeed() {
  await Promise.all(
    platformData.map((item) =>
      payload.create({
        collection: 'platform',
        data: {
          id: item.id,
          name: item.name,
          type: item.platformTypeId,
        },
      })
    )
  );
}
