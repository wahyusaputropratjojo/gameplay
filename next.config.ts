import { withPayload } from '@payloadcms/next/withPayload';
import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: 'cdn2.steamgriddb.com',
        protocol: 'https',
      },
    ],
  },
};

export default withPayload(nextConfig);
