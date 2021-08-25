import React from 'react'
// import '../css/LiveAnywhere.css'
import { Container, Row, Col, Image } from 'react-bootstrap'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import img1 from '../../assets/images/liveanywhere-1.jpg'
import img2 from '../../assets/images/liveanywhere-2.jpg'
import img3 from '../../assets/images/liveanywhere-3.jpg'
import img4 from '../../assets/images/liveanywhere-4.jpg'

const cards = [
  {
    id: 0,
    title: 'Outdoor getaways',
    img: img1
  },
  {
    id: 1,
    title: 'Unique stays',
    img: img2
  },
  {
    id: 2,
    title: 'Entire homes',
    img: img3
  },
  {
    id: 3,
    title: 'Pets allowed',
    img: img4
  },
]

const LiveAnywhere = () => {
  return (
    <Container>
      <h2>Live anywhere</h2>
      <Row className='d-flex'>
        {cards.map((card, index) => {
          return (
            <Col className='mt-3' xs={6} md={3} lg={3}>
              <Image className='img-fluid mb-2' key={index} src={card.img} rounded />
              <h5>{card.title}</h5>
            </Col>
          )
        })}
      </Row>
    </Container>
  )
}

export default LiveAnywhere