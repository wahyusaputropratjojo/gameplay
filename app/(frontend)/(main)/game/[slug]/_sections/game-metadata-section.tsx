import { UnpopulatedRelationshipFieldAlert } from '@/components/alert/unpopulated-relationship-field-alert';
import { Badge } from '@/components/ui/badge';
import type { Game } from '@/lib/types/payload';
import { formatISOToLongDate } from '@/lib/utils/format-iso-to-long-date';

export function GameMetadataSection({
  name,
  genre,
  theme,
  initialReleaseDate,
}: Pick<Game, 'name' | 'genre' | 'theme' | 'initialReleaseDate'>) {
  const isGenreUnpopulated = genre.some((item) => typeof item === 'string');
  const isThemeUnpopulated = theme.some((item) => typeof item === 'string');

  return (
    <section className="overflow-hidden rounded-xl border-[.5px] border-gray-400">
      <div className="flex h-1 w-full items-center bg-gray-1000 font-medium text-background-100" />
      <h1 className="display p-4">{name}</h1>
      <div className="flex flex-col divide-y-[.5px] divide-solid divide-gray-400 border-gray-400 border-y-[.5px] lg:flex-row lg:divide-x-[.5px] lg:divide-y-0">
        <section className="flex items-center gap-2 px-4 py-2 md:py-3 lg:gap-3 lg:px-6">
          <p className="font-semibold text-xs md:text-sm">Initial Release</p>
          <p className="text-xs md:text-sm">
            {formatISOToLongDate(initialReleaseDate)}
          </p>
        </section>
        <section className="flex items-center gap-2 px-4 py-2 md:py-3 lg:gap-3 lg:px-6">
          <p className="font-semibold text-xs md:text-sm">Genre</p>
          <div className="flex flex-wrap gap-1 md:gap-2">
            {genre
              .filter((item) => typeof item === 'object')
              .map((item) => {
                return <Badge key={item.id}>{item.name}</Badge>;
              })}
            {isGenreUnpopulated && <UnpopulatedRelationshipFieldAlert />}
          </div>
        </section>
        <section className="flex items-center gap-2 px-4 py-2 md:py-3 lg:gap-3 lg:px-6">
          <p className="font-semibold text-xs md:text-sm">Theme</p>
          <div className="flex flex-wrap gap-1 md:gap-2">
            {theme
              .filter((item) => typeof item === 'object')
              .map((item) => {
                return <Badge key={item.id}>{item.name}</Badge>;
              })}
            {isThemeUnpopulated && <UnpopulatedRelationshipFieldAlert />}
          </div>
        </section>
      </div>
      <div className="diagonal-pattern h-5 w-full md:h-8" />
    </section>
  );
}
