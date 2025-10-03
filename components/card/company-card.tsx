import { ArrowUpRightIcon } from 'lucide-react';
import Image, { type ImageProps } from 'next/image';
import { Card, CardHeader, CardTitle } from '@/components/ui/card';

type CompanyCardProps = {
  title: string;
  image: Omit<ImageProps, 'height' | 'width' | 'fill'>;
};

export function CompanyCard({ title, image }: CompanyCardProps) {
  return (
    <Card className="items-center" isHoverable orientation="horizontal">
      <Image
        className="size-20 shrink-0 rounded-[calc(var(--card-radius)-var(--card-padding))] bg-light p-3"
        height={80}
        width={80}
        {...image}
      />
      <CardHeader className="w-full">
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <ArrowUpRightIcon className="m-2 shrink-0" />
    </Card>
  );
}
