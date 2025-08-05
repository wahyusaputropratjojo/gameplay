import Link from 'next/link';
import { HighlightCard } from '@/components/card/highlight-card';

type DiscoveryProps = {
  title?: string;
  items: {
    id: string;
    name: string;
    slug: string;
    description: string;
    heroURL: string;
  }[];
};

export function Discovery({ title, items }: DiscoveryProps) {
  return (
    <div className="flex flex-col gap-2">
      {title && <h3>{title}</h3>}
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:gap-4 lg:grid-cols-3">
        {items.map((item) => (
          <Link
            className="last:hidden lg:last:block"
            href={`/game/${item.slug}`}
            key={item.id}
          >
            <HighlightCard
              alt={`${item.name} - Hero`}
              description={item.description}
              name={item.name}
              src={item.heroURL}
            />
          </Link>
        ))}
      </div>
    </div>
  );
}
