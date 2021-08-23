import React from 'react'
import { Container, Row, Col, Image } from 'react-bootstrap'
import img1 from '../../assets/images/liveanywhere-1.jpg'
import img2 from '../../assets/images/liveanywhere-2.jpg'
import img3 from '../../assets/images/liveanywhere-3.jpg'
import img4 from '../../assets/images/liveanywhere-4.jpg'

const LiveAnywhere = () => {
  return (
    <>
      <Container>
        <Row>
          <Col xs={6} md={3}>
            <Image src={img1} rounded />
          </Col>
          <Col xs={6} md={3}>
            <Image src={img2} rounded />
          </Col>
          <Col xs={6} md={3}>
            <Image src={img3} rounded />
          </Col>
          <Col xs={6} md={3}>
            <Image src={img4} rounded />
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default LiveAnywhere
