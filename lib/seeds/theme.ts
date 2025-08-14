import themeData from '@/lib/data/theme.json' with { type: 'json' };
import { payload } from '@/lib/payload';

export async function themeSeed() {
  await Promise.all(
    themeData.map((item) =>
      payload.create({
        collection: 'theme',
        data: {
          id: item.id,
          name: item.name,
        },
      })
    )
  );
}
