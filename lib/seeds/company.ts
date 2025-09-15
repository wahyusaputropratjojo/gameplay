import companyData from '@/lib/data/company.json' with { type: 'json' };
import { payload } from '@/lib/payload';

export async function companySeed() {
  if (companyData && companyData.length > 0) {
    await Promise.all(
      companyData.map((item) =>
        payload.create({
          collection: 'company',
          data: {
            country: item.countryId,
            founded: item.founded,
            id: item.id,
            logo: item.mediaId,
            name: item.name,
            slug: item.slug,
          },
        })
      )
    );
  }
}
