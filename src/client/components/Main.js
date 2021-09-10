import Navbar from './Navbar'
import Hero from './Hero'
import ExploreNearby from './ExploreNearby'
import LiveAnywhere from './LiveAnywhere';
import TryHosting from './TryHosting';
import Inspiration from './Inspiration/Inspiration';
import Footer from '../footer/Footer'
import DirectoryFooter from '../footer/DirectoryFooter';
import { Container } from 'react-bootstrap';

// import Layout from './client/components/Layout';

const MainComponent = () => {
    return (
        <Container fluid>
            <Navbar />
            <Hero />
            <ExploreNearby />
            <LiveAnywhere />
            <TryHosting />
            <Inspiration />
            <DirectoryFooter />
            <Footer />
        </Container>
    );
}

export default MainComponent;