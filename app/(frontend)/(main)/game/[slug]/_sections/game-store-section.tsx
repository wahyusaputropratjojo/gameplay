import Link from 'next/link';
import { StoreCard } from '@/components/card/store-card';
import type { Store } from '@/lib/types/payload';

type GameStoreSectionProps = {
  storeLink: {
    store: string | Store;
    url: string;
    id?: string | null;
  }[];
};

export function GameStoreSection({ storeLink }: GameStoreSectionProps) {
  return (
    <section className="space-y-2">
      <p className="heading-4">Store</p>
      <div className="grid gap-2 md:grid-cols-3 md:gap-2 lg:grid-cols-1">
        {storeLink.map((item) => (
          <Link
            href={item.url}
            key={item.id}
            rel="noopener noreferrer"
            target="_blank"
          >
            {typeof item.store === 'object' &&
              typeof item.store.logo === 'object' &&
              item.store.logo &&
              typeof item.store.logo.url === 'string' && (
                <StoreCard
                  image={{
                    alt: item.store.logo.alt,
                    src: item.store.logo.url,
                  }}
                  title={item.store.name}
                />
              )}
          </Link>
        ))}
      </div>
    </section>
  );
}
