import storeData from '@/lib/data/store.json' with { type: 'json' };
import { payload } from '@/lib/payload';

export async function storeSeed() {
  if (storeData && storeData.length > 0) {
    await Promise.all(
      storeData.map((item) =>
        payload.create({
          collection: 'store',
          data: {
            id: item.id,
            logo: item.mediaId,
            name: item.name,
          },
        })
      )
    );
  }
}
