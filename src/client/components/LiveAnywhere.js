import React from 'react'
import '../css/LiveAnywhere.css'
import { Container, Row, Col, Image } from 'react-bootstrap'
import FilterCards from '../constants/FilterCards'

const LiveAnywhere = ({ filterCards }) => {
  return (
    <Container fluid className='py-5 ps-5 pe-5'>
      <h2>Live anywhere</h2>
      <Row className=''>
        {FilterCards[0].map((card, index) => {
          return (
            <Col className='mt-3' xs={6} md={3}>
              <a href={card.path}>
                <Image className='mb-2 rounded-3 w-100' key={index} src={card.img} />
              </a>
              <h5>{card.title}</h5>
            </Col>
          )
        })}
      </Row>
    </Container>
  )
}

export default LiveAnywhere