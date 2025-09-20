import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { BadgeListSection } from '@/components/section/badge-list-section';
import { CompanyListSection } from '@/components/section/company-list-section';
import { DurationSection } from '@/components/section/duration-section';
import { GameImageSection } from '@/components/section/game-image-section';
import { StoreSection } from '@/components/section/store-section';
import { getGame } from '@/lib/queries/get-game';

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const game = await getGame({ slug });

  return {
    description: game.description,
    title: `${game.name} | Game`,
  };
}

export default async function Page({ params }: Props) {
  const { slug } = await params;
  const game = await getGame({ slug });

  if (!game) {
    notFound();
  }

  return (
    <main className="container relative space-y-8">
      <GameImageSection hero={game.hero} logo={game.logo} />
      <section className="space-y-2">
        <h4>Description</h4>
        <p>{game.description}</p>
      </section>
      <div className="grid gap-8 md:grid-cols-2 md:gap-4">
        <BadgeListSection items={game.genre} title="Genre" />
        <BadgeListSection items={game.theme} title="Theme" />
      </div>
      <div className="grid gap-8 md:grid-cols-2 md:gap-4">
        <CompanyListSection items={game.developer} title="Developer" />
        <CompanyListSection items={game.publisher} title="Publisher" />
      </div>
      {game.duration && <DurationSection duration={game.duration} />}
      {game.storeLink && game.storeLink.length > 0 && (
        <StoreSection storeLink={game.storeLink} />
      )}
    </main>
  );
}
