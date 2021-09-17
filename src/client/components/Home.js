import Navbar from './Navbar'
import Hero from './Hero'
import ExploreNearby from './ExploreNearby'
import LiveAnywhere from './LiveAnywhere';
import TryHosting from './TryHosting';
import DiscoverThingsToDo from './DiscoverThingsToDo'
import Inspiration from './Inspiration/Inspiration';
import Footer from '../footer/Footer'
import DirectoryFooter from '../footer/DirectoryFooter';

const HomeComponent = () => {
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

export default HomeComponent;