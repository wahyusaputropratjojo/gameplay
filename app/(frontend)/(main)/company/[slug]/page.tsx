import type { Metadata } from 'next';
import { getCompany } from '@/lib/queries/get-company';
import { AboutSection } from './about-section';
import { TitleSection } from './title-section';

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const company = await getCompany({ slug });

  return {
    description: company.description,
    title: `${company.name} | Company`,
  };
}

export default async function Page({ params }: Props) {
  const { slug } = await params;
  const { name, logo, about } = await getCompany({ slug });

  return (
    <main className="container space-y-6 lg:space-y-8">
      <TitleSection logo={logo} name={name} />
      <AboutSection data={about} />
    </main>
  );
}
