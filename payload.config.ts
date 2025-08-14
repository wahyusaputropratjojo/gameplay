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
    importMap: {
      baseDir: path.resolve(dirname),
      importMapFile: path.resolve(dirname, 'app', '(payload)', 'import-map.ts'),
    },
    meta: {
      title: 'Administrator - Gameplay',
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
