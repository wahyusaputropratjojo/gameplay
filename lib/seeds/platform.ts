import platformData from '@/lib/data/platform.json' with { type: 'json' };
import { payload } from '@/lib/payload';

export async function platformSeed() {
  if (platformData && platformData.length > 0) {
    await Promise.all(
      platformData.map((item) =>
        payload.create({
          collection: 'platform',
          data: {
            id: item.id,
            name: item.name,
            slug: item.slug,
            type: item.platformTypeId,
          },
        })
      )
    );
  }
}
