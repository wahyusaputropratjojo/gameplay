import companyData from '@/lib/data/company.json' with { type: 'json' };
import { payload } from '@/lib/payload';

export async function companySeed() {
  await Promise.all(
    companyData.map((item) =>
      payload.create({
        collection: 'company',
        data: {
          country: item.countryId,
          id: item.id,
          logo: item.mediaId,
          name: item.name,
        },
      })
    )
  );
}
