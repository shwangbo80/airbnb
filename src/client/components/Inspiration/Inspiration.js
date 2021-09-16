import React from 'react'
import { Container, Tab, Tabs } from 'react-bootstrap'
import ArtsList from './ArtsList'
import OutdoorList from './OutdoorList'
import CabinsList from './CabinsList'
import BeachList from './BeachLIst'
import PopularList from './Popular'
import UniqueList from './Unique'

const Inspiration = () => {
  return (
    <React.Fragment>
      <Container className="px-5 my-5">
        <Tabs defaultActiveKey="home"
          id="uncontrolled-tab-example"
          transition={false}
          className="mb-3 text-dark">
          <Tab eventKey="home" title="Destinations for arts & culture">
            <ArtsList />
          </Tab>
          <Tab eventKey="profile" title="Destination for outdoor adventure">
            <OutdoorList />
          </Tab>
          <Tab eventKey="mountain" title="Mountain cabins">
            <CabinsList />
          </Tab>
          <Tab eventKey="beach" title="Beach destinations">
            <BeachList />
          </Tab>
          <Tab eventKey="popular" title="Popular destinations">
            <PopularList />
          </Tab>
          <Tab eventKey="unique" title="Unique stays">
            <UniqueList />

          </Tab>
        </Tabs>
      </Container>
    </React.Fragment>
  )
}

export default Inspiration