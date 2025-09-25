import Link from 'next/link';
import { UnpopulatedRelationshipFieldAlert } from '@/components/alert/unpopulated-relationship-field-alert';
import { EntityCard } from '@/components/card/entity-card';
import { ContentSection } from '@/components/content-section';
import type { Game } from '@/lib/types/payload';

export function GamePublisherSection({ publisher }: Pick<Game, 'publisher'>) {
  const isUnpopulated = publisher.some((item) => typeof item === 'string');

  return (
    <ContentSection
      title="Publisher"
      titleElement="heading-2"
      titleSize="heading-4"
    >
      <div className="grid gap-2">
        {publisher.map(
          (item) =>
            typeof item === 'object' &&
            typeof item.logo === 'object' &&
            typeof item.logo.url === 'string' && (
              <Link href={`/company/${item.slug}`} key={item.id}>
                <EntityCard
                  alt={item.logo.alt}
                  fill
                  name={item.name}
                  padding="medium"
                  src={item.logo.url}
                />
              </Link>
            )
        )}

        {isUnpopulated && <UnpopulatedRelationshipFieldAlert />}
      </div>
    </ContentSection>
  );
}
