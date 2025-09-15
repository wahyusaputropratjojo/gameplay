import { ageRatingSeed } from '@/lib/seeds/age-rating';
import { ageRatingAuthoritySeed } from '@/lib/seeds/age-rating-authority';
import { ageRatingLogoSeed } from '@/lib/seeds/age-rating-logo';
import { companySeed } from '@/lib/seeds/company';
import { companyLogoSeed } from '@/lib/seeds/company-logo';
import { continentSeed } from '@/lib/seeds/continent';
import { countrySeed } from '@/lib/seeds/country';
import { countryFlagSeed } from '@/lib/seeds/country-flag';
import { genreSeed } from '@/lib/seeds/genre';
import { platformSeed } from '@/lib/seeds/platform';
import { platformTypeSeed } from '@/lib/seeds/platform-type';
import { reset } from '@/lib/seeds/reset';
import { storeSeed } from '@/lib/seeds/store';
import { storeLogoSeed } from '@/lib/seeds/store-logo';
import { themeSeed } from '@/lib/seeds/theme';
import { userSeed } from '@/lib/seeds/user';

async function seed() {
  await reset();
  await userSeed();

  // Media
  await ageRatingLogoSeed();
  await companyLogoSeed();
  await countryFlagSeed();
  await storeLogoSeed();

  await continentSeed();
  await countrySeed();
  await companySeed();
  await ageRatingAuthoritySeed();
  await ageRatingSeed();
  await genreSeed();
  await storeSeed();
  await themeSeed();
  await platformTypeSeed();
  await platformSeed();

  process.exit(0);
}

await seed();
