import { FeaturedDiscoverySection } from './featured-discovery-section';
import { NewReleasesShelfSection } from './new-releases-shelf-section';
import { UpcomingSpotlightSection } from './upcoming-spotlight-section';

export default function HomePage() {
  return (
    <>
      <UpcomingSpotlightSection />
      <NewReleasesShelfSection />
      <FeaturedDiscoverySection />
    </>
  );
}
