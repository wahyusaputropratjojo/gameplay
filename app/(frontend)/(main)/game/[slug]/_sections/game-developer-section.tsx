import Link from 'next/link';
import { EntityCard } from '@/components/card/entity-card';
import { ContentSection } from '@/components/content-section';
import type { Game } from '@/lib/types/payload';

export function GameDeveloperSection({ developer }: Pick<Game, 'developer'>) {
  return (
    <ContentSection
      title="Developer"
      titleElement="heading-2"
      titleSize="heading-4"
    >
      <div className="grid gap-2">
        {developer.map((item) => {
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
    </ContentSection>
  );
}
