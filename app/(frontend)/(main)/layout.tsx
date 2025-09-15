import type { ReactNode } from 'react';
import { NavigationBar } from '@/components/navigation-bar';

type MainLayoutProps = {
  children: ReactNode;
};

export default function MainLayout({ children }: MainLayoutProps) {
  return (
    <>
      <NavigationBar />
      <div className="mb-24 xl:mb-0">{children}</div>
    </>
  );
}
