import { DurationCard } from '@/components/card/duration-card';
import type { Game } from '@/lib/types/payload';

export function GameDurationSection({
  duration,
}: Required<Pick<Game, 'duration'>>) {
  if (
    duration.additionalContent ||
    duration.combined ||
    duration.completionist ||
    duration.mainStory
  ) {
    return (
      <section className="space-y-2">
        <p className="heading-4">Duration</p>
        <div className="grid gap-2 md:grid-cols-2 lg:grid-cols-4">
          {duration.mainStory && (
            <DurationCard
              description="Complete core narrative"
              duration={duration.mainStory}
              title="Main Story"
            />
          )}
          {duration.additionalContent && (
            <DurationCard
              description="Complete core narrative and extras"
              duration={duration.additionalContent}
              title="Additional Content"
            />
          )}
          {duration.completionist && (
            <DurationCard
              description="Complete everything"
              duration={duration.completionist}
              title="Completionist"
            />
          )}
          {duration.combined && (
            <DurationCard
              description="All playstyles"
              duration={duration.combined}
              title="Combined"
            />
          )}
        </div>
      </section>
    );
  }
}
