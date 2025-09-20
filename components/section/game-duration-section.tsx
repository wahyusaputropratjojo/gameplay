import { DurationCard } from '@/components/card/duration-card';

type GameDurationSectionProps = {
  duration: {
    mainStory?: number | null | undefined;
    additionalContent?: number | null | undefined;
    completionist?: number | null | undefined;
    combined?: number | null | undefined;
  };
};

export function GameDurationSection({ duration }: GameDurationSectionProps) {
  if (
    duration.additionalContent ||
    duration.combined ||
    duration.completionist ||
    duration.mainStory
  ) {
    return (
      <section className="space-y-2">
        <h4>Duration</h4>
        <div className="grid gap-2 md:grid-cols-2 md:gap-4">
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
