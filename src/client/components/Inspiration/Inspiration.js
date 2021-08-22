import React from 'react'
import { Container, Tab, Tabs } from 'react-bootstrap'
import ArtsList from './ArtsList'
import OutdoorList from './OutdoorList'

const Inspiration = () => {
  return (
    <React.Fragment>
      <Container fluid className="mx-4 my-5">
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
          </Tab>
          <Tab eventKey="beach" title="Beach destinations">
          </Tab>
          <Tab eventKey="popular" title="Popular destinations">
          </Tab>
          <Tab eventKey="unique" title="Unique stays">
          </Tab>
        </Tabs>
      </Container>
    </React.Fragment>
  )
}

export default Inspiration