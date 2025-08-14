import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { postgresAdapter } from '@payloadcms/db-postgres';
import {
  FixedToolbarFeature,
  lexicalEditor,
} from '@payloadcms/richtext-lexical';
import { buildConfig } from 'payload';
import sharp from 'sharp';

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
    user: user.slug,
    importMap: {
      baseDir: path.resolve(dirname),
      importMapFile: path.resolve(dirname, 'app', '(payload)', 'import-map.ts'),
    },
    routes: {
      login: '/sign-in',
      logout: '/sign-out',
      inactivity: '/sign-out-inactivity',
      forgot: '/forgot-password',
      reset: '/reset-password',
    },
    meta: {
      title: 'Admin - Gameplay',
      description: 'Collection of video game information.',
      icons: [
        {
          rel: 'icon',
          type: 'image/ico',
          url: '/favicon.ico',
        },
      ],
    },
  },
  editor: lexicalEditor({
    features: ({ defaultFeatures }) => [
      ...defaultFeatures,
      FixedToolbarFeature(),
    ],
  }),
  secret: process.env.PAYLOAD_SECRET || '',
  typescript: {
    outputFile: path.resolve(dirname, 'lib', 'types', 'payload.ts'),
  },
  db: postgresAdapter({
    pool: {
      connectionString: process.env.DATABASE_URI || '',
    },
    idType: 'uuid',
    allowIDOnCreate: true,
  }),
  sharp,
  telemetry: false,
});
