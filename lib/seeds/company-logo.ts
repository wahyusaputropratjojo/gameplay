import path from 'node:path';
import companyLogoData from '@/lib/data/company-logo.json' with {
  type: 'json',
};
import { payload } from '@/lib/payload';

export async function companyLogoSeed() {
  if (companyLogoData && companyLogoData.length > 0) {
    await Promise.all(
      companyLogoData.map((item) =>
        payload.create({
          collection: 'companyLogo',
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
