import Navbar from './client/components/Navbar'
import Hero from './client/components/Hero'
import Footer from './client/components/Footer'
import ExploreNearby from './client/components/ExploreNearby';
import LiveAnywhere from './client/components/LiveAnywhere.js';
import TryHosting from './client/components/TryHosting';
import DiscoverThingsToDo from './client/components/DiscoverThingsToDo';
import Inspiration from './client/components/Inspiration';
import DirectoryFooter from './client/components/DirectoryFooter';

const App = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <ExploreNearby />
      <LiveAnywhere />
      <TryHosting />
      <DiscoverThingsToDo />
      <Inspiration />
      <DirectoryFooter />
      <Footer />
    </>
  );
}

export default App;