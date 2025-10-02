import { ContentSection } from '@/components/content-section';
import type { Game } from '@/lib/types/payload';

export function GameDescriptionSection({
  description,
}: Pick<Game, 'description'>) {
  return (
    <ContentSection>
      <p>{description}</p>
    </ContentSection>
  );
}
