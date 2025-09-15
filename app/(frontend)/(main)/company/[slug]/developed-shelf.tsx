import { Shelf } from '@/components/shelf';

type DevelopedShelfProps = {
  items: {
    id: string;
    name: string;
    slug: string;
    grid: {
      alt: string;
      url: string;
    };
  }[];
};

export function DevelopedShelf({ items }: DevelopedShelfProps) {
  return <Shelf items={items} title="Developed" />;
}
