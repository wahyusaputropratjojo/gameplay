import Image, { type ImageProps } from 'next/image';

type GridCardProps = {
  title: string;
  image: Omit<ImageProps, 'className'>;
};

export function GridCard({ image, title }: GridCardProps) {
  return (
    <div className="group select-none space-y-2 hover:cursor-pointer">
      <div className="relative">
        <div className="absolute z-20 size-full rounded-xl bg-light/10 opacity-0 transition-opacity group-hover:opacity-100" />
        <Image className="rounded-xl" {...image} />
      </div>

      <div>
        <p className="line-clamp-1 font-semibold">{title}</p>
      </div>
    </div>
  );
}
