import { GameplayLogo } from '@/components/logo/gameplay-logo';

export function Header() {
  return (
    <header className="container bg-background-100 py-4">
      <section className="flex justify-between">
        <GameplayLogo />
      </section>
    </header>
  );
}
