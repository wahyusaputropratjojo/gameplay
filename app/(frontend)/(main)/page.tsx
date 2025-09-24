import { FeaturedDiscoverySection } from './_sections/featured-discovery-section';
import { NewReleasesShelfSection } from './_sections/new-releases-shelf-section';
import { UpcomingSpotlightSection } from './_sections/upcoming-spotlight-section';

export default function HomePage() {
  return (
    <>
      <UpcomingSpotlightSection />
      <NewReleasesShelfSection />
      <FeaturedDiscoverySection />
    </>
  );
}
