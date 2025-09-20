import Link from 'next/link';
import { EntityCard } from '@/components/card/entity-card';
import type { Company } from '@/lib/types/payload';

type CompanyListSectionProps = {
  title: string;
  items: (string | Company)[];
};

export function GameCompanyListSection({
  items,
  title,
}: CompanyListSectionProps) {
  return (
    <section className="space-y-2">
      <h4>{title}</h4>
      <div className="grid gap-2">
        {items.map((item) => {
          if (typeof item === 'object' && typeof item.logo === 'object') {
            return (
              <Link href={`/company/${item.slug}`} key={item.id}>
                <EntityCard
                  alt={item.logo.alt}
                  fill
                  name={item.name}
                  padding="medium"
                  src={item.logo.url as string}
                />
              </Link>
            );
          }
          return 'Increase the Depth';
        })}
      </div>
    </section>
  );
}
