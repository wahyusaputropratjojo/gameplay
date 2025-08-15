import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { postgresAdapter } from '@payloadcms/db-postgres';
import {
  FixedToolbarFeature,
  lexicalEditor,
} from '@payloadcms/richtext-lexical';
import { buildConfig } from 'payload';
import sharp from 'sharp';
import { ageRating } from '@/lib/collections/age-rating';
import { ageRatingAuthority } from '@/lib/collections/age-rating-authority';
import { company } from '@/lib/collections/company';
import { continent } from '@/lib/collections/continent';
import { country } from '@/lib/collections/country';
import { game } from '@/lib/collections/game';
import { gamePlatform } from '@/lib/collections/game-platform';
import { gameStore } from '@/lib/collections/game-store';
import { genre } from '@/lib/collections/genre';
import { media } from '@/lib/collections/media';
import { platform } from '@/lib/collections/platform';
import { platformType } from '@/lib/collections/platform-type';
import { store } from '@/lib/collections/store';
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
      title: 'Admin - Gameplay',
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
    ageRatingAuthority,
    company,
    continent,
    country,
    game,
    gamePlatform,
    gameStore,
    genre,
    media,
    platform,
    platformType,
    store,
    theme,
    user,
  ],
  db: postgresAdapter({
    allowIDOnCreate: true,
    idType: 'uuid',
    pool: {
      connectionString: process.env.DATABASE_URI || '',
    },
  }),
  editor: lexicalEditor({
    features: ({ defaultFeatures }) => [
      ...defaultFeatures,
      FixedToolbarFeature(),
    ],
  }),
  secret: process.env.PAYLOAD_SECRET || '',
  sharp,
  telemetry: false,
  typescript: {
    outputFile: path.resolve(dirname, 'lib', 'types', 'payload.ts'),
  },
});
