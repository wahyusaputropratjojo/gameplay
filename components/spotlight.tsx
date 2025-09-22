'use client';

import Autoplay from 'embla-carousel-autoplay';
import useEmblaCarousel from 'embla-carousel-react';
import Image from 'next/image';
import Link from 'next/link';
import type { Game, GameHero, GameLogo } from '@/lib/types/payload';

type PickedGame = Pick<
  Game,
  'id' | 'name' | 'description' | 'slug' | 'hero' | 'logo'
>;

type SpotlightProps = {
  items: PickedGame[];
};

export function Spotlight({ items }: SpotlightProps) {
  const [emblaRef] = useEmblaCarousel(
    {
      loop: true,
      watchDrag: true,
    },
    [
      Autoplay({
        delay: 10_000,
      }),
    ]
  );

  return (
    <section className="overflow-hidden" ref={emblaRef}>
      <div className="-ml-4 flex flex-row">
        {items.length > 0 &&
          items.map((item) => (
            <Link
              className="flex shrink-0 grow-0 basis-full pl-4"
              href={`/game/${item.slug}`}
              key={item.id}
            >
              <div className="grid size-full cursor-pointer select-none grid-cols-1 grid-rows-1 rounded-xl">
                {typeof item.hero === 'object' && (
                  <GameHeroImage image={item.hero} />
                )}
                <div className="z-10 col-span-full row-span-full bg-gradient-to-t from-0% from-dark/80 to-30% to-transparent" />
                {typeof item.logo === 'object' && (
                  <GameLogoImage
                    description={item.description}
                    image={item.logo}
                  />
                )}
              </div>
            </Link>
          ))}
      </div>
    </section>
  );
}

type GameHeroImageProps = {
  image: GameHero;
};

function GameHeroImage({ image }: GameHeroImageProps) {
  const { alt, blurData, sizes } = image;

  return (
    <>
      {sizes?.medium &&
        typeof sizes.medium.height === 'number' &&
        typeof sizes.medium.width === 'number' &&
        typeof sizes.medium.url === 'string' && (
          <Image
            alt={alt}
            blurDataURL={blurData}
            className="col-span-full row-span-full size-full rounded-xl object-cover md:hidden"
            draggable="false"
            height={sizes.medium.height}
            placeholder="blur"
            src={sizes.medium.url}
            width={sizes.medium.width}
          />
        )}
      {sizes?.classic &&
        typeof sizes.classic.height === 'number' &&
        typeof sizes.classic.width === 'number' &&
        typeof sizes.classic.url === 'string' && (
          <Image
            alt={alt}
            blurDataURL={blurData}
            className="col-span-full row-span-full hidden size-full rounded-xl object-cover md:block xl:hidden"
            draggable="false"
            height={sizes.classic.height}
            placeholder="blur"
            src={sizes.classic.url}
            width={sizes.classic.width}
          />
        )}
      {sizes?.anamorphic &&
        typeof sizes.anamorphic.height === 'number' &&
        typeof sizes.anamorphic.width === 'number' &&
        typeof sizes.anamorphic.url === 'string' && (
          <Image
            alt={alt}
            blurDataURL={blurData}
            className="col-span-full row-span-full hidden size-full rounded-xl object-cover xl:block"
            draggable="false"
            height={sizes.anamorphic.height}
            placeholder="blur"
            src={sizes.anamorphic.url}
            width={sizes.anamorphic.width}
          />
        )}
    </>
  );
}

type GameLogoImage = Pick<Game, 'description'> & {
  image: GameLogo;
};

function GameLogoImage({ image, description }: GameLogoImage) {
  return (
    <div className="z-20 col-span-full row-span-full flex size-full items-end space-y-2 self-end p-6 xl:p-12">
      <div className="flex flex-col space-y-6">
        {typeof image.height === 'number' &&
          typeof image.width === 'number' &&
          typeof image.url === 'string' && (
            <Image
              alt={image.alt}
              className="w-40 object-contain object-bottom-left md:w-64 xl:w-80"
              height={image.height}
              src={image.url}
              width={image.width}
            />
          )}
        <p className="line-clamp-3 text-pretty font-medium text-gray-100 text-xs md:max-w-[65ch] lg:text-base dark:text-gray-1000">
          {description}
        </p>
      </div>
    </div>
  );
}
