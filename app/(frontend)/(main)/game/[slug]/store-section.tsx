import Link from 'next/link';
import { EntityCard } from '@/components/card/entity-card';
import type { Store } from '@/lib/types/payload';

type StoreSectionProps = {
  storeLink: {
    store: string | Store;
    url: string;
    id?: string | null;
  }[];
};

export function StoreSection({ storeLink }: StoreSectionProps) {
  return (
    <section className="space-y-2">
      <p className="heading-4">Store</p>
      <div className="grid gap-2 md:grid-cols-3 md:gap-4 lg:grid-cols-4">
        {storeLink.map((item) => (
          <Link
            href={item.url}
            key={item.id}
            rel="noopener noreferrer"
            target="_blank"
          >
            {typeof item.store === 'object' &&
              typeof item.store.logo === 'object' &&
              item.store.logo && (
                <EntityCard
                  alt={item.store.logo.alt}
                  fill
                  name={item.store.name}
                  padding="none"
                  src={item.store.logo.url as string}
                />
              )}
          </Link>
        ))}
      </div>
    </section>
  );
}
