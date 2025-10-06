import Image from 'next/image';
import type { Company } from '@/lib/types/payload';
import { formatISOToLongDate } from '@/lib/utils/format-iso-to-long-date';

export function CompanyMetadataSection({
  name,
  founded,
  logo,
}: Pick<Company, 'name' | 'founded' | 'logo'>) {
  return (
    <section className="overflow-hidden rounded-xl border-[.5px] border-gray-400">
      <div className="flex flex-col items-start sm:flex-row sm:items-center sm:justify-between">
        {typeof logo === 'object' && typeof logo.url === 'string' && (
          <div className="relative aspect-square w-full shrink-0 bg-light sm:order-2 sm:w-2/10 lg:aspect-classic-horizontal lg:w-1/4">
            <Image
              alt={logo.alt}
              className="select-none p-14 sm:p-4 lg:p-6"
              fill
              src={logo.url}
            />
          </div>
        )}
        <h1 className="display text-pretty p-4">{name}</h1>
      </div>
      <div className="flex flex-col divide-y-[.5px] divide-solid divide-gray-400 border-gray-400 border-y-[.5px] lg:flex-row lg:divide-x-[.5px] lg:divide-y-0">
        <section className="flex items-center gap-2 px-4 py-2 md:py-3 lg:gap-3 lg:px-6">
          <p className="font-semibold text-xs md:text-sm">Founded</p>
          <p className="text-xs md:text-sm">{formatISOToLongDate(founded)}</p>
        </section>
      </div>
      <div className="diagonal-pattern h-5 w-full md:h-8" />
    </section>
  );
}
