import Image, { type ImageProps } from 'next/image';
import { UnpopulatedRelationshipFieldAlert } from '@/components/alert/unpopulated-relationship-field-alert';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import type { Game } from '@/lib/types/payload';
import { formatISOToLongDate } from '@/lib/utils/format-iso-to-long-date';

type Props = {
  image: Omit<ImageProps, 'className'>;
} & Pick<Game, 'name' | 'initialReleaseDate' | 'genre' | 'theme'>;

export function GameDetailCard({
  name,
  initialReleaseDate,
  image,
  genre,
  theme,
}: Props) {
  const isGenreUnpopulated = genre.some((item) => typeof item === 'string');
  const isThemeUnpopulated = theme.some((item) => typeof item === 'string');

  return (
    <Card className="items-center " orientation="horizontal">
      <Image
        className="w-1/3 select-none rounded-[calc(var(--card-radius)-var(--card-padding))]"
        {...image}
      />
      <CardContent className="space-y-2">
        <p className="heading-5">{name}</p>
        <div className="space-y-1">
          <p className="text-xs">Initial Release</p>
          <p className="text-sm">{formatISOToLongDate(initialReleaseDate)}</p>
        </div>
        <div className="space-y-1">
          <p className="text-xs">Genre</p>
          <div className="flex flex-wrap gap-1">
            {genre
              .filter((item) => typeof item === 'object')
              .map((item) => {
                return <Badge key={item.id}>{item.name}</Badge>;
              })}
            {isGenreUnpopulated && <UnpopulatedRelationshipFieldAlert />}
          </div>
        </div>
        <div className="space-y-1">
          <p className="text-xs">Theme</p>
          <div className="flex flex-wrap gap-1">
            {theme
              .filter((item) => typeof item === 'object')
              .map((item) => {
                return <Badge key={item.id}>{item.name}</Badge>;
              })}
            {isThemeUnpopulated && <UnpopulatedRelationshipFieldAlert />}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
