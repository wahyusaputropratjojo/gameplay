import { Shelf } from '@/components/shelf';

type PublishedShelfProps = {
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

export function PublishedShelf({ items }: PublishedShelfProps) {
  return <Shelf items={items} title="Published" />;
}
