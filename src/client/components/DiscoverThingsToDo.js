import React from 'react'
import { Container, Row, Col, Image } from 'react-bootstrap'
import img1 from '../../assets/images/discoverthings-1.jpg'
import img2 from '../../assets/images/discoverthings-2.jpg'
import img3 from '../../assets/images/discoverthings-3.jpg'

const cards = [
  {
    id: 0,
    title: 'Experiences',
    description: 'Find unforgettable activities near you.',
    img: img1,
    path: 'https://www.airbnb.com/s/experiences?location_search=NEARBY'
  },
  {
    id: 1,
    title: 'Online Experiences',
    description: 'Live, interactive led by Hosts.',
    img: img2,
    path: 'https://www.airbnb.com/s/experiences/online'
  },
  {
    id: 2,
    title: 'Olympians & Paralympians',
    description: 'Online activities hosted by atheletes.',
    img: img3,
    path: 'https://www.airbnb.com/s/all?refinement_paths%5B%5D=%2Fplaylists%2F48971&last_search_session_id=b9efe845-dc72-413e-bb12-0003c3ce86b4&search_type=section_navigation'
  },
]

const DiscoverThingsToDo = () => {
  return (
    <Container fluid className=''>
      <h2>Discover things to do</h2>
      <Row>
        {cards.map((card, index) => {
          return (
            <Col>
              <a href={card.path}>
                <Image className='img-fluid mb-2 rounded-3' key={index} src={card.img} />
              </a>
              <h5>{card.title}</h5>
              <p>{card.description}</p>
            </Col>
          )
        })
        }
      </Row>
    </Container>
  )
}

export default DiscoverThingsToDo
