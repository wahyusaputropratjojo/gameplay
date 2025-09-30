import { numberToUnicodeFraction } from '@/lib/utils/number-to-unicode-fraction';

type DurationCardProps = {
  duration: number;
  title: string;
  description: string;
};

export function DurationCard({
  duration,
  title,
  description,
}: DurationCardProps) {
  return (
    <div className="flex items-center gap-4 rounded-(--card-radius) bg-gray-100 p-(--card-padding) [--card-padding:--spacing(1.5)] [--card-radius:var(--radius-xl)]">
      <div className="flex size-20 shrink-0 flex-col items-center justify-center overflow-hidden rounded-[calc(var(--card-radius)-var(--card-padding))] bg-gray-200 text-gray-100">
        <p className="select-none font-semibold text-gray-1000 text-xl">
          {numberToUnicodeFraction(duration)}
        </p>
        <p className="select-none rounded-full bg-gray-1000 px-2 text-center font-semibold text-gray-100 text-xs">
          Hours
        </p>
      </div>
      <div>
        <p className="font-medium">{title}</p>
        <p className="font-light text-xs">{description}</p>
      </div>
    </div>
  );
}
