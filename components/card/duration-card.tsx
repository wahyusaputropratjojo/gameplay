import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
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
    <Card className="items-center" orientation="horizontal">
      <CardContent className="flex size-20 shrink-0 flex-col items-center justify-center overflow-hidden rounded-[calc(var(--card-radius)-var(--card-padding))] bg-gray-200 text-gray-100">
        <p className="select-none font-semibold text-gray-1000 text-xl">
          {numberToUnicodeFraction(duration)}
        </p>
        <p className="select-none rounded-full bg-gray-1000 px-2 text-center font-semibold text-gray-100 text-xs">
          Hours
        </p>
      </CardContent>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
    </Card>
  );
}
