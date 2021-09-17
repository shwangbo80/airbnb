import Hero from './Hero/Hero'
import ExploreNearby from './ExploreNearby/ExploreNearby'
import LiveAnywhere from './LiveAnywhere'
import TryHosting from './TryHosting'
import DiscoverThingsToDo from './DiscoverThingsToDo'
import Inspiration from './Inspiration/Inspiration'
import Footer from '../footer/Footer'
import DirectoryFooter from '../footer/DirectoryFooter'

const HomeComponent = () => {
  return (
    <>
      <Hero />
      <ExploreNearby />
      <LiveAnywhere />
      <TryHosting />
      <DiscoverThingsToDo />
      <Inspiration />
      <DirectoryFooter />
      <Footer />
    </>
  )
}

export default HomeComponent
