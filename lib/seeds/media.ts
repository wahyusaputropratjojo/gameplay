import path from 'node:path';
import mediaData from '@/lib/data/media.json' with { type: 'json' };
import { payload } from '@/lib/payload';

export async function mediaSeed() {
  await Promise.all(
    mediaData.map((item) =>
      payload.create({
        collection: 'media',
        data: {
          id: item.id,
          alt: item.alt,
        },
        filePath: path.resolve(item.filePath),
      })
    )
  );
}
