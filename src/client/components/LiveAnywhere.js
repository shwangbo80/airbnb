import React from 'react'
import '../css/LiveAnywhere.css'
import { Container, Row, Col, Image } from 'react-bootstrap'
import img1 from '../../assets/images/liveanywhere-1.jpg'
import img2 from '../../assets/images/liveanywhere-2.jpg'
import img3 from '../../assets/images/liveanywhere-3.jpg'
import img4 from '../../assets/images/liveanywhere-4.jpg'

const cards = [
  {
    id: 0,
    title: 'Outdoor getaways',
    img: img1,
    path: 'https://airbnb.com/'
  },
  {
    id: 1,
    title: 'Unique stays',
    img: img2,
    path: 'https://airbnb.com/'
  },
  {
    id: 2,
    title: 'Entire homes',
    img: img3,
    path: 'https://airbnb.com/'
  },
  {
    id: 3,
    title: 'Pets allowed',
    img: img4,
    path: 'https://airbnb.com/'
  },
]

const LiveAnywhere = () => {

  return (
    <Container fluid className='py-5 debug'>
      <h2 className='debug'>Live anywhere</h2>
      <Row className='debug'>
        {cards.map((card, index) => {
          return (
            <Col className='mt-3 g-3 debug' xs={6} md={3} lg={3}>
              <a href={card.path}>
                <Image className='img-fluid mb-2 rounded-3 debug' key={index} src={card.img} />
              </a>
              <h5 className='debug'>{card.title}</h5>
            </Col>
          )
        })}
      </Row>
    </Container>
  )
}

export default LiveAnywhere