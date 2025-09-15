import platformTypeData from '@/lib/data/platform-type.json' with {
  type: 'json',
};
import { payload } from '@/lib/payload';

export async function platformTypeSeed() {
  if (platformTypeData && platformTypeData.length > 0) {
    await Promise.all(
      platformTypeData.map((item) =>
        payload.create({
          collection: 'platformType',
          data: {
            id: item.id,
            name: item.name,
          },
        })
      )
    );
  }
}
