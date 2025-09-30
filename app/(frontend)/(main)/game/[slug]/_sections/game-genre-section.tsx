import { UnpopulatedRelationshipFieldAlert } from '@/components/alert/unpopulated-relationship-field-alert';
import { ContentSection } from '@/components/content-section';
import { Badge } from '@/components/ui/badge';
import type { Game } from '@/lib/types/payload';

export function GameGenreSection({ genre }: Pick<Game, 'genre'>) {
  const isUnpopulated = genre.some((item) => typeof item === 'string');

  return (
    <ContentSection>
      <div className="flex flex-wrap gap-2">
        {genre
          .filter((item) => typeof item === 'object')
          .map((item) => {
            return <Badge key={item.id}>{item.name}</Badge>;
          })}

        {isUnpopulated && <UnpopulatedRelationshipFieldAlert />}
      </div>
    </ContentSection>
  );
}
