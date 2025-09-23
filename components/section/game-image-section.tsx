'use client';

import Image from 'next/image';
import type { Game, GameHero, GameLogo } from '@/lib/types/payload';

type GameImageSectionProps = Pick<Game, 'hero' | 'logo'>;

export function GameImageSection({ hero, logo }: GameImageSectionProps) {
  if (typeof hero === 'object' && typeof logo === 'object') {
    return (
      <section className="grid">
        <GameHeroImage hero={hero} />
        <div className="z-10 col-span-full row-span-full bg-gradient-to-t from-10% from-background-100 to-50% to-transparent" />
        <GameLogoImage logo={logo} />
      </section>
    );
  }
}

type GameHeroImageProps = {
  hero: GameHero;
};

function GameHeroImage({ hero }: GameHeroImageProps) {
  if (hero.sizes?.square && hero.sizes?.classic && hero.sizes?.anamorphic) {
    return (
      <>
        <Image
          alt={hero.alt}
          blurDataURL={hero.blurDataURL}
          className="col-span-full row-span-full select-none rounded-xl sm:hidden"
          height={hero.sizes.square.height as number}
          placeholder="blur"
          src={hero.sizes.square.url as string}
          width={hero.sizes.square.width as number}
        />
        <Image
          alt={hero.alt}
          blurDataURL={hero.blurDataURL}
          className="col-span-full row-span-full hidden select-none rounded-xl sm:block md:hidden"
          height={hero.sizes.classic.height as number}
          placeholder="blur"
          src={hero.sizes.classic.url as string}
          width={hero.sizes.classic.width as number}
        />
        <Image
          alt={hero.alt}
          blurDataURL={hero.blurDataURL}
          className="col-span-full row-span-full hidden select-none rounded-xl md:block"
          height={hero.sizes.anamorphic.height as number}
          placeholder="blur"
          src={hero.sizes.anamorphic.url as string}
          width={hero.sizes.anamorphic.width as number}
        />
      </>
    );
  }
}

type GameLogoImageProps = {
  logo: GameLogo;
};

function GameLogoImage({ logo }: GameLogoImageProps) {
  return (
    <Image
      alt={logo.alt}
      className="z-20 col-span-full row-span-full h-48 w-auto max-w-2/3 select-none self-end justify-self-center object-contain object-bottom md:max-w-1/2 xl:h-72"
      height={logo.height as number}
      priority
      src={logo.url as string}
      width={logo.width as number}
    />
  );
}
