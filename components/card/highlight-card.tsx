import Image, { type ImageProps } from 'next/image';

type HighlightCardProps = {
  title: string;
  description: string;
  image: Omit<ImageProps, 'className'>;
};

export function HighlightCard({
  title,
  description,
  image,
}: HighlightCardProps) {
  return (
    <div className="group select-none space-y-2 hover:cursor-pointer">
      <div className="relative">
        <div className="absolute z-20 size-full rounded-xl bg-light/10 opacity-0 transition-opacity group-hover:opacity-100" />
        <Image className="rounded-xl" {...image} />
      </div>

      <div>
        <p className="line-clamp-1 font-semibold text-lg">{title}</p>
        <p className="line-clamp-2 max-w-[35ch] text-gray-700 text-sm">
          {description}
        </p>
      </div>
    </div>
  );
}
