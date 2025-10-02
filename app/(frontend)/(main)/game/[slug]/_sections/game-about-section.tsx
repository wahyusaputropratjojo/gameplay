import { RichText } from '@payloadcms/richtext-lexical/react';
import type { Game } from '@/lib/types/payload';

export function GameAboutSection({ about }: Pick<Game, 'about'>) {
  return (
    <section className="flex justify-between gap-8 overflow-hidden rounded-xl lg:border-[.5px] lg:border-gray-400">
      <div className="diagonal-pattern hidden flex-auto border-gray-400 border-r-[.5px] lg:block" />
      <RichText
        className="flex max-w-[100ch] flex-col gap-0 text-pretty lg:p-4"
        data={about}
      />
      <div className="diagonal-pattern hidden flex-auto border-gray-400 border-l-[.5px] lg:block" />
    </section>
  );
}
