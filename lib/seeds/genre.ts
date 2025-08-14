import genreData from '@/lib/data/genre.json' with { type: 'json' };
import { payload } from '@/lib/payload';

export async function genreSeed() {
  await Promise.all(
    genreData.map((item) =>
      payload.create({
        collection: 'genre',
        data: {
          id: item.id,
          name: item.name,
        },
      })
    )
  );
}
