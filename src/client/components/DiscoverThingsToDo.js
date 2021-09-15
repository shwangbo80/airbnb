import React from 'react'
import { Container, Row, Col, Image } from 'react-bootstrap'
import FilterCards from '../constants/FilterCards'

const DiscoverThingsToDo = ({ filterCards }) => {
  return (
    <Container fluid className='ps-5 pe-5'>
      <h2>Discover things to do</h2>
      <Row>
        {FilterCards[2].map((card, index) => {
          return (
            <Col>
              <a href={card.path}>
                <Image className='img-fluid mb-2 rounded-3 w-100' key={index} src={card.img} />
              </a>
              <h5>{card.title}</h5>
              <p className='py-0'>{card.description}</p>
            </Col>
          )
        })
        }
      </Row>
    </Container>
  )
}

export default DiscoverThingsToDo;
