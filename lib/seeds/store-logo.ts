import path from 'node:path';
import storeLogoData from '@/lib/data/store-logo.json' with { type: 'json' };
import { payload } from '@/lib/payload';

export async function storeLogoSeed() {
  if (storeLogoData && storeLogoData.length > 0) {
    await Promise.all(
      storeLogoData.map((item) =>
        payload.create({
          collection: 'storeLogo',
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
