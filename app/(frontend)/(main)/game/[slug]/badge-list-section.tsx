import { Badge } from '@/components/ui/badge';

type BadgeItem = {
  id: string;
  name: string;
};

type BadgeListSectionProps<T extends BadgeItem> = {
  title: string;
  items: (string | T)[];
};

export function BadgeListSection<T extends BadgeItem>({
  title,
  items,
}: BadgeListSectionProps<T>) {
  return (
    <section className="flex flex-col gap-2">
      <h4>{title}</h4>
      <div className="flex flex-wrap gap-2">
        {items.map((item) => {
          if (typeof item === 'object') {
            return <Badge key={item.id}>{item.name}</Badge>;
          }
          return 'Increase the Depth';
        })}
      </div>
    </section>
  );
}
