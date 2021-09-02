import React from 'react'
import '../css/LiveAnywhere.css'
import { Container, Row, Col, Image } from 'react-bootstrap'
import FilterCards from '../constants/FilterCards'

// import img1 from '../../assets/images/liveanywhere-1.jpg'
// import img2 from '../../assets/images/liveanywhere-2.jpg'
// import img3 from '../../assets/images/liveanywhere-3.jpg'
// import img4 from '../../assets/images/liveanywhere-4.jpg'

// Need to create routes for links for less clutter/code
// I can probably leave these objects in one file within the constants folder

const LiveAnywhere = ({ filterCards }) => {

  return (
    <Container fluid className='py-5 ps-5 pe-5'>
      <h2>Live anywhere</h2>
      <Row className=''>
        {FilterCards[0].map((card, index) => {
          return (
            <Col className='mt-3 g-3 ' xs={6} md={3} lg={3}>
              <a href={card.path}>
                <Image className='img-fluid mb-2 rounded-3 ' key={index} src={card.img} />
              </a>
              <h5 className=''>{card.title}</h5>
            </Col>
          )
        })}
      </Row>
    </Container>
  )
}

export default LiveAnywhere