'use client';

import Autoplay from 'embla-carousel-autoplay';
import Fade from 'embla-carousel-fade';
import useEmblaCarousel from 'embla-carousel-react';
import Image from 'next/image';
import Link from 'next/link';

type SpotlightProps = {
  items: {
    id: string;
    name: string;
    description: string;
    slug: string;
    hero: {
      alt: string;
      url: string;
      width: number;
      height: number;
    };
    logo: {
      alt: string;
      url: string;
      width: number;
      height: number;
    };
  }[];
};

export function Spotlight({ items }: SpotlightProps) {
  const [emblaRef] = useEmblaCarousel(
    {
      breakpoints: {
        '(min-width: 1280px)': {
          watchDrag: false,
        },
      },
    },
    [
      Autoplay({
        delay: 5000,
      }),
      Fade({
        active: false,
        breakpoints: {
          '(min-width: 1280px)': {
            active: true,
          },
        },
      }),
    ]
  );

  return (
    <section className="flex flex-col gap-2 overflow-hidden" ref={emblaRef}>
      <div className="grid auto-cols-[85%] grid-flow-col gap-4 xl:auto-cols-[100%]">
        {items.length > 0 &&
          items.map((item) => (
            <Link href={`/game/${item.slug}`} key={item.id}>
              <div className="grid aspect-standard-vertical cursor-pointer select-none grid-cols-1 grid-rows-1 overflow-hidden rounded-xl md:aspect-standard-horizontal xl:aspect-anamorphic-horizontal">
                <Image
                  alt={item.hero.alt}
                  blurDataURL="data:text/plain;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mOU+g8AATkBG5//A4sAAAAASUVORK5CYII="
                  className="col-span-full row-span-full size-full object-cover"
                  draggable="false"
                  height={item.hero.height}
                  placeholder="blur"
                  priority={true}
                  sizes="(min-width: 1540px) 1841px, (min-width: 1280px) calc(9.17vw + 1391px), (min-width: 1040px) 1769px, (min-width: 780px) 1367px, (min-width: 640px) calc(45.83vw + 1677px), calc(349.69vw - 158px)"
                  src={item.hero.url}
                  width={item.hero.width}
                />

                <div className="z-10 col-span-full row-span-full bg-gradient-to-t from-30% from-dark/80 to-70% to-transparent" />

                <div className="z-20 col-span-full row-span-full flex size-full items-end space-y-2 self-end p-6 xl:p-12">
                  <div className="space-y-2 lg:space-y-6">
                    <Image
                      alt={item.logo.alt}
                      className="h-48 w-8/12 object-contain object-bottom-left md:w-6/12 lg:h-72 xl:w-4/12"
                      height={item.logo.height}
                      priority={true}
                      src={item.logo.url}
                      width={item.logo.width}
                    />
                    <p className="line-clamp-3 max-w-[65ch] text-gray-100 dark:text-gray-1000">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            </Link>
          ))}
      </div>
    </section>
  );
}
