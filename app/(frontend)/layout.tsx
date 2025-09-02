import { GeistMono } from 'geist/font/mono';
import { GeistSans } from 'geist/font/sans';
import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import './style.css';

export const metadata: Metadata = {
  description: 'Collection of video game information.',
  title: 'Gameplay',
};

export default function RootLayout ({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html
      className={`${GeistSans.variable} ${GeistMono.variable}`}
      data-theme="dark"
      lang="en"
    >
    <body>{children}</body>
    </html>
  );
}
