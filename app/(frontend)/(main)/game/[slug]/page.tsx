import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { BadgeListSection } from '@/components/section/badge-list-section';
import { GameCompanyListSection } from '@/components/section/game-company-list-section';
import { GameDurationSection } from '@/components/section/game-duration-section';
import { GameImageSection } from '@/components/section/game-image-section';
import { GameStoreSection } from '@/components/section/game-store-section';
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
    <main className="relative space-y-8">
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
        <GameCompanyListSection items={game.developer} title="Developer" />
        <GameCompanyListSection items={game.publisher} title="Publisher" />
      </div>
      {game.duration && <GameDurationSection duration={game.duration} />}
      {game.storeLink && game.storeLink.length > 0 && (
        <GameStoreSection storeLink={game.storeLink} />
      )}
    </main>
  );
}
