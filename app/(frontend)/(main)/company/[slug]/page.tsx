import { getCompany } from '@/lib/queries/get-company';
import { AboutSection } from './about-section';
import { TitleSection } from './title-section';

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const { name, logo, about } = await getCompany({ slug });

  return (
    <main className="container space-y-6 lg:space-y-8">
      <TitleSection logo={logo} name={name} />
      <AboutSection data={about} />
    </main>
  );
}
