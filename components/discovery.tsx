import Link from 'next/link';
import { HighlightCard } from '@/components/card/highlight-card';
import { ContentSection } from '@/components/content-section';
import type { Game } from '@/lib/types/payload';

type PickedGame = Pick<Game, 'id' | 'name' | 'slug' | 'description' | 'hero'>;

type DiscoveryProps = {
  title?: string;
  games: PickedGame[];
};

export function Discovery({ title, games }: DiscoveryProps) {
  return (
    <ContentSection title={title}>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:gap-4 lg:grid-cols-3">
        {games.map((game) => (
          <Link
            className="last:hidden lg:last:block"
            href={`/game/${game.slug}`}
            key={game.id}
          >
            {typeof game.hero === 'object' &&
              typeof game.hero.sizes === 'object' &&
              typeof game.hero.sizes.wide === 'object' &&
              typeof game.hero.sizes.wide.url === 'string' &&
              typeof game.hero.sizes.wide.height === 'number' &&
              typeof game.hero.sizes.wide.width === 'number' && (
                <HighlightCard
                  description={game.description}
                  image={{
                    alt: game.hero.alt,
                    blurDataURL: game.hero.blurData,
                    height: game.hero.sizes.wide.height,
                    placeholder: 'blur',
                    src: game.hero.sizes.wide.url,
                    width: game.hero.sizes.wide.width,
                  }}
                  title={game.name}
                />
              )}
          </Link>
        ))}
      </div>
    </ContentSection>
  );
}
