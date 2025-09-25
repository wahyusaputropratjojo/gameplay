import { UnpopulatedRelationshipFieldAlert } from '@/components/alert/unpopulated-relationship-field-alert';
import { ContentSection } from '@/components/content-section';
import { Badge } from '@/components/ui/badge';
import type { Game } from '@/lib/types/payload';

export function GameThemeSection({ theme }: Pick<Game, 'theme'>) {
  const isUnpopulated = theme.some((item) => typeof item === 'string');

  return (
    <ContentSection
      title="Theme"
      titleElement="heading-2"
      titleSize="heading-4"
    >
      <div className="flex flex-wrap gap-2">
        {theme
          .filter((item) => typeof item === 'object')
          .map((item) => {
            return <Badge key={item.id}>{item.name}</Badge>;
          })}

        {isUnpopulated && <UnpopulatedRelationshipFieldAlert />}
      </div>
    </ContentSection>
  );
}
