import storeData from '@/lib/data/store.json' with { type: 'json' };
import { payload } from '@/lib/payload';

export async function storeSeed() {
  await Promise.all(
    storeData.map((item) =>
      payload.create({
        collection: 'store',
        data: {
          id: item.id,
          name: item.name,
          logo: item.mediaId,
        },
      })
    )
  );
}
