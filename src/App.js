// import Navbar from './client/components/Navbar/Navbar';
import Hero from './client/components/Hero/Hero';
import Footer from './client/components/Footer';
import ExploreNearby from './client/components/ExploreNearby';
import LiveAnywhere from './client/components/LiveAnywhere';
import TryHosting from './client/components/TryHosting';
import Inspiration from './client/components/Inspiration';
import DirectoryFooter from './client/components/DirectoryFooter';
// import Layout from './client/components/Layout';

const App = () => {
  return (
    <>
      {/* <Navbar /> */}
      <Hero />
      <ExploreNearby />
      <LiveAnywhere />
      <TryHosting />
      <Inspiration />
      <DirectoryFooter />
      <Footer />
    </>
  );
};

export default App;
