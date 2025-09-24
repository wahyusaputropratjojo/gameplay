import { ContentSection } from '@/components/content-section';
import type { Game } from '@/lib/types/payload';

export function GameDescriptionSection({
  description,
}: Pick<Game, 'description'>) {
  return (
    <ContentSection
      title="Description"
      titleElement="heading-2"
      titleSize="heading-4"
    >
      <p>{description}</p>
    </ContentSection>
  );
}
