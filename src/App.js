import Navbar from './client/components/Navbar'
import Hero from './client/components/Hero'
import Footer from './client/components/Footer'
import ExploreNearby from './client/components/ExploreNearby';
import LiveAnywhere from './client/components/LiveAnywhere.js';
import TryHosting from './client/components/TryHosting';
import Inspiration from './client/components/Inspiration';
import DirectoryFooter from './client/components/DirectoryFooter';
import img1 from './assets/images/tryhosting-1.jpg'

const App = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <ExploreNearby />
      <LiveAnywhere />
      <TryHosting
        img={img1}
        title='Try hosting'
        desc='Earn extra income and unlock new opportunities by sharing your space.'
        buttonText='Learn more'
      />
      <Inspiration />
      <DirectoryFooter />
      <Footer />
    </>
  );
}

export default App;