import companyData from '@/lib/data/company.json' with { type: 'json' };
import { payload } from '@/lib/payload';

export async function companySeed() {
  await Promise.all(
    companyData.map((item) =>
      payload.create({
        collection: 'company',
        data: {
          id: item.id,
          name: item.name,
          logo: item.mediaId,
        },
      })
    )
  );
}
