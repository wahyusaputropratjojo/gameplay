import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getGame } from '@/lib/queries/get-game';
import { BadgeListSection } from './badge-list-section';
import { CompanyListSection } from './company-list-section';
import { GameImageSection } from './game-image-section';

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
    </main>
  );
}
