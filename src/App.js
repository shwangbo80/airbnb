import Navbar from './client/components/Navbar'
import Hero from './client/components/Hero'
import ExploreNearby from './client/components/ExploreNearby';
import LiveAnywhere from './client/components/LiveAnywhere';
import TryHosting from './client/components/TryHosting';
import Inspiration from './client/components/Inspiration/Inspiration';
import Footer from './client/footer/Footer'
import DirectoryFooter from './client/footer/DirectoryFooter';

// import Layout from './client/components/Layout';

const App = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <ExploreNearby />
      <LiveAnywhere />
      <TryHosting />
      <Inspiration />
      <DirectoryFooter />
      <Footer />
    </>
  );
}

export default App;