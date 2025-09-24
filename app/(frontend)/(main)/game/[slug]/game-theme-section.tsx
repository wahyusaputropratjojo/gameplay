import { ContentSection } from '@/components/content-section';
import { Badge } from '@/components/ui/badge';
import type { Game } from '@/lib/types/payload';

export function GameThemeSection({ theme }: Pick<Game, 'theme'>) {
  return (
    <ContentSection
      title="Theme"
      titleElement="heading-2"
      titleSize="heading-4"
    >
      <div className="flex flex-wrap gap-2">
        {theme.map((item) => {
          if (typeof item === 'object') {
            return <Badge key={item.id}>{item.name}</Badge>;
          }
          return 'Increase the Depth';
        })}
      </div>
    </ContentSection>
  );
}
