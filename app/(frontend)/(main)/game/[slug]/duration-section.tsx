import { numberToUnicodeFraction } from '@/lib/utils/number-to-unicode-fraction';

type DurationSectionProps = {
  mainStory: number;
  withAdditionalContent: number;
  completionist: number;
  combined: number;
};

export function DurationSection({
  completionist,
  mainStory,
  withAdditionalContent,
  combined,
}: DurationSectionProps) {
  return (
    <section className="space-y-2">
      <h4>Duration</h4>
      <div className="grid gap-2 md:grid-cols-2 md:gap-4">
        <div className="flex items-center gap-4 rounded-(--card-radius) bg-gray-100 p-(--card-padding) [--card-padding:--spacing(1.5)] [--card-radius:var(--radius-xl)]">
          <div className="flex size-18 shrink-0 flex-col items-center justify-center overflow-hidden rounded-[calc(var(--card-radius)-var(--card-padding))] bg-light text-gray-100">
            <p className="select-none font-semibold text-xl">
              {numberToUnicodeFraction(mainStory)}
            </p>
            <p className="select-none rounded-full bg-gray-100 px-2 text-center font-semibold text-gray-1000 text-xs">
              Hours
            </p>
          </div>
          <div>
            <p className="font-medium">Main Story</p>
            <p className="font-light text-xs">Complete core narrative</p>
          </div>
        </div>
        <div className="flex items-center gap-4 rounded-(--card-radius) bg-gray-100 p-(--card-padding) [--card-padding:--spacing(1.5)] [--card-radius:var(--radius-xl)]">
          <div className="flex size-18 shrink-0 flex-col items-center justify-center overflow-hidden rounded-[calc(var(--card-radius)-var(--card-padding))] bg-light text-gray-100">
            <p className="select-none font-semibold text-xl">
              {numberToUnicodeFraction(withAdditionalContent)}
            </p>
            <p className="select-none rounded-full bg-gray-100 px-2 text-center font-semibold text-gray-1000 text-xs">
              Hours
            </p>
          </div>
          <div>
            <p className="font-medium">Additional Content</p>
            <p className="font-light text-xs">
              Complete core narrative and extras
            </p>
          </div>
        </div>
        <div className="flex items-center gap-4 rounded-(--card-radius) bg-gray-100 p-(--card-padding) [--card-padding:--spacing(1.5)] [--card-radius:var(--radius-xl)]">
          <div className="flex size-18 shrink-0 flex-col items-center justify-center overflow-hidden rounded-[calc(var(--card-radius)-var(--card-padding))] bg-light text-gray-100">
            <p className="select-none font-semibold text-xl">
              {numberToUnicodeFraction(completionist)}
            </p>
            <p className="select-none rounded-full bg-gray-100 px-2 text-center font-semibold text-gray-1000 text-xs">
              Hours
            </p>
          </div>
          <div>
            <p className="font-medium">Completionist</p>
            <p className="font-light text-xs">Complete everything</p>
          </div>
        </div>
        <div className="flex items-center gap-4 rounded-(--card-radius) bg-gray-100 p-(--card-padding) [--card-padding:--spacing(1.5)] [--card-radius:var(--radius-xl)]">
          <div className="flex size-18 shrink-0 flex-col items-center justify-center overflow-hidden rounded-[calc(var(--card-radius)-var(--card-padding))] bg-light text-gray-100">
            <p className="select-none font-semibold text-xl">
              {numberToUnicodeFraction(combined)}
            </p>
            <p className="select-none rounded-full bg-gray-100 px-2 text-center font-semibold text-gray-1000 text-xs">
              Hours
            </p>
          </div>
          <div>
            <p className="font-medium">Combined</p>
            <p className="font-light text-xs">All playstyles</p>
          </div>
        </div>
      </div>
    </section>
  );
}
