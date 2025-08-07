import type { ReactNode } from 'react';

export default function MinimalLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return children;
}
