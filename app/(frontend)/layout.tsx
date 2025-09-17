import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import { geistMono, geistSans } from '@/styles/fonts/geist';
import './style.css';

export const metadata: Metadata = {
  description: 'Collection of video game information.',
  title: 'Gameplay',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html
      className={`${geistSans.variable} ${geistMono.variable} selection:bg-gray-1000 selection:text-background-100`}
      data-theme="dark"
      lang="en"
    >
      <body>{children}</body>
    </html>
  );
}
