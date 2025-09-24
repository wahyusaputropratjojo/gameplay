'use client';

import useEmblaCarousel from 'embla-carousel-react';
import Link from 'next/link';
import { GridCard } from '@/components/card/grid-card';
import { NextButton } from '@/components/carousel/next-button';
import { PrevButton } from '@/components/carousel/prev-button';
import { ContentSection } from '@/components/content-section';
import { usePrevNextButton } from '@/hooks/carousel/use-prev-next-button';
import type { Game } from '@/lib/types/payload';

type PickedGame = Pick<Game, 'id' | 'name' | 'slug' | 'grid'>;

type ShelfProps = {
  title: string;
  games: PickedGame[];
};

export function Shelf({ title, games }: ShelfProps) {
  const [emblaRef, emblaAPI] = useEmblaCarousel({
    breakpoints: {
      '(min-width: 1280px)': {
        watchDrag: false,
      },
    },
    slidesToScroll: 'auto',
  });

  const {
    onNextButtonClick,
    onPrevButtonClick,
    prevButtonDisabled,
    nextButtonDisabled,
  } = usePrevNextButton(emblaAPI);

  return (
    <ContentSection title={title} titleElement="heading-2">
      <div className="absolute hidden space-x-2 justify-self-end lg:block">
        <PrevButton
          className="rounded-full"
          disabled={prevButtonDisabled}
          onClick={onPrevButtonClick}
        />
        <NextButton
          className="rounded-full"
          disabled={nextButtonDisabled}
          onClick={onNextButtonClick}
        />
      </div>
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="-ml-4 flex">
          {games.map((game) => (
            <Link
              className="shrink-0 grow-0 basis-6/10 pl-4 md:basis-1/4 lg:basis-1/5 xl:basis-1/6"
              href={`/game/${game.slug}`}
              key={game.id}
            >
              {typeof game.grid === 'object' &&
                typeof game.grid.height === 'number' &&
                typeof game.grid.url === 'string' &&
                typeof game.grid.width === 'number' && (
                  <GridCard
                    image={{
                      alt: game.grid.alt,
                      blurDataURL: game.grid.blurDataURL,
                      height: game.grid.height,
                      placeholder: 'blur',
                      src: game.grid.url,
                      width: game.grid.width,
                    }}
                    title={game.name}
                  />
                )}
            </Link>
          ))}
        </div>
      </div>
    </ContentSection>
  );
}
