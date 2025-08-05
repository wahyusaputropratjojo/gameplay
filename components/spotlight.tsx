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
    heroURL: string;
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
              <div className="relative aspect-standard-vertical cursor-pointer select-none overflow-hidden rounded-xl md:aspect-standard-horizontal xl:aspect-anamorphic-horizontal">
                <div className="absolute bottom-0 z-20 space-y-2 p-6">
                  <h3 className="text-gray-100 dark:text-gray-1000">
                    {item.name}
                  </h3>
                  <p className="line-clamp-3 max-w-[65ch] text-gray-100 dark:text-gray-1000">
                    {item.description}
                  </p>
                </div>
                <div className="absolute z-10 h-full w-full bg-linear-to-t from-20% from-dark/80 to-transparent" />
                <Image
                  alt={`${item.name} - Hero`}
                  blurDataURL="data:text/plain;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mOU+g8AATkBG5//A4sAAAAASUVORK5CYII="
                  className="z-0 size-full object-cover object-center"
                  draggable="false"
                  height={620}
                  placeholder="blur"
                  priority={items.indexOf(item) === 0}
                  sizes="(min-width: 1540px) 1841px, (min-width: 1280px) calc(9.17vw + 1391px), (min-width: 1040px) 1769px, (min-width: 780px) 1367px, (min-width: 640px) calc(45.83vw + 1677px), calc(349.69vw - 158px)"
                  src={item.heroURL}
                  width={1920}
                />
              </div>
            </Link>
          ))}
      </div>
    </section>
  );
}
