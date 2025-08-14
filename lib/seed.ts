import { ageRatingSeed } from '@/lib/seeds/age-rating';
import { ageRatingAuthoritySeed } from '@/lib/seeds/age-rating-authority';
import { companySeed } from '@/lib/seeds/company';
import { continentSeed } from '@/lib/seeds/continent';
import { countrySeed } from '@/lib/seeds/country';
import { genreSeed } from '@/lib/seeds/genre';
import { mediaSeed } from '@/lib/seeds/media';
import { platformSeed } from '@/lib/seeds/platform';
import { platformTypeSeed } from '@/lib/seeds/platform-type';
import { reset } from '@/lib/seeds/reset';
import { storeSeed } from '@/lib/seeds/store';
import { themeSeed } from '@/lib/seeds/theme';
import { userSeed } from '@/lib/seeds/user';

async function seed() {
  await reset();
  await userSeed();
  await mediaSeed();
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
