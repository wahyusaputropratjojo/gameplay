import type { ReactNode } from 'react';
import { NavigationBar } from '@/components/navigation-bar';

type MainLayoutProps = {
  children: ReactNode;
};

export default function MainLayout({ children }: MainLayoutProps) {
  return (
    <>
      <NavigationBar />
      <main className="container space-y-10 md:space-y-14">{children}</main>
    </>
  );
}
