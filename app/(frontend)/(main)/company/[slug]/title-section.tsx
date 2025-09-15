import Image from 'next/image';
import type { CompanyLogo } from '@/lib/types/payload';

type TitleSectionProps = {
  name: string;
  logo: string | CompanyLogo;
};

export function TitleSection({ logo, name }: TitleSectionProps) {
  if (typeof logo === 'object') {
    return (
      <section className="flex flex-col gap-2 sm:flex-row sm:items-center sm:gap-4">
        <div className="relative size-24 shrink-0 rounded-xl bg-light sm:size-32 md:size-40">
          <Image alt={logo.alt} className="p-3" fill src={logo.url as string} />
        </div>
        <div>
          <h1>{name}</h1>
          <p>Founded in 1987</p>
        </div>
      </section>
    );
  }

  return 'Increase the Depth';
}
