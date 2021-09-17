// import Navbar from './Navbar'
// import Hero from './Hero'
// import ExploreNearby from './ExploreNearby'
// import LiveAnywhere from './LiveAnywhere';
// import TryHosting from './TryHosting';
// import DiscoverThingsToDo from './DiscoverThingsToDo'
// import Inspiration from './Inspiration/Inspiration';
// import Footer from '../footer/Footer'
// import DirectoryFooter from '../footer/DirectoryFooter';
import { Container } from 'react-bootstrap'
import HomeComponent from './Home'
import Hosting from './Hosting'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'

// import Layout from './client/components/Layout';

const MainComponent = () => {
  return (
    <Router>
      <Container fluid className="px-0">
        <Switch>
          <Route exact path="/">
            <HomeComponent />
          </Route>
          <Route path="/hosting">
            <Hosting />
          </Route>
        </Switch>
      </Container>
    </Router>
  )
}

export default MainComponent
