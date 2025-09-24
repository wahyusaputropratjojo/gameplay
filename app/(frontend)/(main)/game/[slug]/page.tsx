import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getGame } from '@/lib/queries/get-game';
import { BadgeListSection } from './badge-list-section';
import { GameCompanyListSection } from './game-company-list-section';
import { GameDescriptionSection } from './game-description-section';
import { GameDurationSection } from './game-duration-section';
import { GameImageSection } from './game-image-section';
import { GameStoreSection } from './game-store-section';

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
    <div className="space-y-6">
      <GameImageSection hero={game.hero} logo={game.logo} />
      <GameDescriptionSection description={game.description} />
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
    </div>
  );
}
