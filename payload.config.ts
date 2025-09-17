import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { postgresAdapter } from '@payloadcms/db-postgres';
import { lexicalEditor } from '@payloadcms/richtext-lexical';
import { buildConfig } from 'payload';
import sharp from 'sharp';
import { ageRating } from '@/lib/collections/age-rating';
import { ageRatingAuthority } from '@/lib/collections/age-rating-authority';
import { ageRatingLogo } from '@/lib/collections/age-rating-logo';
import { company } from '@/lib/collections/company';
import { companyLogo } from '@/lib/collections/company-logo';
import { continent } from '@/lib/collections/continent';
import { country } from '@/lib/collections/country';
import { countryFlag } from '@/lib/collections/country-flag';
import { game } from '@/lib/collections/game';
import { gameGrid } from '@/lib/collections/game-grid';
import { gameHero } from '@/lib/collections/game-hero';
import { gameLogo } from '@/lib/collections/game-logo';
import { gamePlatform } from '@/lib/collections/game-platform';
import { gameStore } from '@/lib/collections/game-store';
import { genre } from '@/lib/collections/genre';
import { platform } from '@/lib/collections/platform';
import { platformLogo } from '@/lib/collections/platform-logo';
import { platformType } from '@/lib/collections/platform-type';
import { store } from '@/lib/collections/store';
import { storeLogo } from '@/lib/collections/store-logo';
import { theme } from '@/lib/collections/theme';
import { user } from '@/lib/collections/user';

const filename = fileURLToPath(import.meta.url);
const dirname = path.dirname(filename);

export default buildConfig({
  admin: {
    autoLogin:
      process.env.NODE_ENV === 'development'
        ? {
            email: process.env.FIRST_USER_EMAIL,
            password: process.env.FIRST_USER_PASSWORD,
            prefillOnly: true,
          }
        : false,
    avatar: 'default',
    importMap: {
      baseDir: path.resolve(dirname),
      importMapFile: path.resolve(dirname, 'app', '(payload)', 'import-map.ts'),
    },
    meta: {
      description: 'Collection of video game information.',
      icons: [
        {
          rel: 'icon',
          type: 'image/ico',
          url: '/favicon.ico',
        },
      ],
      title: 'Administrator',
      titleSuffix: '| Gameplay',
    },
    routes: {
      forgot: '/forgot-password',
      inactivity: '/sign-out-inactivity',
      login: '/sign-in',
      logout: '/sign-out',
      reset: '/reset-password',
    },
    user: user.slug,
  },
  collections: [
    ageRating,
    ageRatingLogo,
    ageRatingAuthority,
    company,
    continent,
    country,
    game,
    gamePlatform,
    gameStore,
    genre,
    platform,
    platformType,
    store,
    theme,
    gameHero,
    user,
    gameGrid,
    gameLogo,
    companyLogo,
    countryFlag,
    platformLogo,
    storeLogo,
  ],
  db: postgresAdapter({
    allowIDOnCreate: true,
    generateSchemaOutputFile: path.resolve(dirname, 'lib/db/schema.ts'),
    idType: 'uuid',

    pool: {
      connectionString: process.env.DATABASE_URI || '',
    },
  }),
  editor: lexicalEditor(),
  secret: process.env.PAYLOAD_SECRET || '',
  serverURL: process.env.NEXT_PUBLIC_URL,
  sharp,
  telemetry: false,
  typescript: {
    outputFile: path.resolve(dirname, 'lib', 'types', 'payload.ts'),
  },
});
