import { ContentSection } from '@/components/content-section';
import type { Game } from '@/lib/types/payload';

export function GameDescriptionSection({
  description,
}: Pick<Game, 'description'>) {
  return (
    <ContentSection>
      <p className="lg:text-lg">{description}</p>
    </ContentSection>
  );
}
