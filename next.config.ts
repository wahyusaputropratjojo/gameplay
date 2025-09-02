import { withPayload } from '@payloadcms/next/withPayload';
import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  images: {
    contentDispositionType: 'attachment',
    contentSecurityPolicy: 'default-src \'self\'; script-src \'none\'; sandbox;',
    dangerouslyAllowSVG: true,
    remotePatterns: [
      {
        hostname: process.env.HOSTNAME as string,
        protocol: process.env.PROTOCOL as 'http' | 'https',
      },
    ],
  },
};

export default withPayload(nextConfig);
