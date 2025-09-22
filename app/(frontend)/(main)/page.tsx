import { FeaturedDiscovery } from './featured-discovery';
import { NewReleasesShelf } from './new-releases-shelf';
import { UpcomingSpotlightSection } from './upcoming-spotlight-section';

export default function HomePage() {
  return (
    <>
      <UpcomingSpotlightSection />
      <NewReleasesShelf />
      <FeaturedDiscovery />
    </>
  );
}
