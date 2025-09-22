import { FeaturedDiscovery } from './featured-discovery';
import { NewReleasesShelf } from './new-releases-shelf';
import { UpcomingSpotlight } from './upcoming-spotlight';

export default function HomePage() {
  return (
    <>
      <UpcomingSpotlight />
      <NewReleasesShelf />
      <FeaturedDiscovery />
    </>
  );
}
