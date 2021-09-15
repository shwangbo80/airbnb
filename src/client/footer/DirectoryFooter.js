import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import AboutDirectory from './DirectoryAbout'
import CommunityDirectory from './DirectoryCommuniity'
import HostDirectory from './DirectoryHost'
import SupportDirectory from './DirectorySupport'

const DirectoryFooter = () => {
  return (
    <React.Fragment>
      <Container fluid className="py-5 px-5 bg-light">
        <Row>
          <Col md={3}>
            <AboutDirectory />
          </Col>

          <Col md={3} className="font-weight-bold">
            <CommunityDirectory />
          </Col>

          <Col md={3} className="font-weight-bold">
            <HostDirectory />
          </Col>

          <Col md={3} className="font-weight-bold">
            <SupportDirectory />
          </Col>
        </Row>
      </Container>
    </React.Fragment>
  )
}

export default DirectoryFooter