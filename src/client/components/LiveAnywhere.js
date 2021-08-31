import React from 'react'
import '../css/LiveAnywhere.css'
import { Container, Row, Col, Image } from 'react-bootstrap'
import img1 from '../../assets/images/liveanywhere-1.jpg'
import img2 from '../../assets/images/liveanywhere-2.jpg'
import img3 from '../../assets/images/liveanywhere-3.jpg'
import img4 from '../../assets/images/liveanywhere-4.jpg'

// Need to create routes for links for less clutter/code
const cards = [
  {
    id: 0,
    title: 'Outdoor getaways',
    img: img1,
    path: 'https://www.airbnb.com/s/homes?location_search=NEARBY&kg_and_tags%5B%5D=Tag:8072&room_types%5B%5D=Entire%20home%2Fapt'
  },
  {
    id: 1,
    title: 'Unique stays',
    img: img2,
    path: 'https://www.airbnb.com/s/homes?refinement_paths%5B%5D=%2Fhomes%2Fsection%2FNEARBY_LISTINGS%3A2400&room_types%5B%5D=Entire%20home%2Fapt&property_type_id%5B%5D=5&property_type_id%5B%5D=6&property_type_id%5B%5D=8&property_type_id%5B%5D=10&property_type_id%5B%5D=12&property_type_id%5B%5D=15&property_type_id%5B%5D=16&property_type_id%5B%5D=17&property_type_id%5B%5D=18&property_type_id%5B%5D=19&property_type_id%5B%5D=23&property_type_id%5B%5D=24&property_type_id%5B%5D=25&property_type_id%5B%5D=28&property_type_id%5B%5D=32&property_type_id%5B%5D=34&property_type_id%5B%5D=44&property_type_id%5B%5D=50&property_type_id%5B%5D=54&property_type_id%5B%5D=57&property_type_id%5B%5D=58&property_type_id%5B%5D=61&property_type_id%5B%5D=63&property_type_id%5B%5D=64&property_type_id%5B%5D=66&property_type_id%5B%5D=67&property_type_id%5B%5D=68&property_type_id%5B%5D=69&property_type_id%5B%5D=62&property_type_id%5B%5D=51&title_type=CURATED_PROPERTY_TYPE'
  },
  {
    id: 2,
    title: 'Entire homes',
    img: img3,
    path: 'https://www.airbnb.com/s/homes?ne_lat=58.902774530412046&ne_lng=-94.770565068375&sw_lat=15.784225469587948&sw_lng=-149.006834931625&room_types%5B%5D=Entire%20home%2Fapt&property_type_id%5B%5D=2&search_type=NAVIGATION_CARD&title_type=CURATED_PROPERTY_TYPE'
  },
  {
    id: 3,
    title: 'Pets allowed',
    img: img4,
    path: 'https://www.airbnb.com/s/homes?ne_lat=58.902774530412046&ne_lng=-94.770565068375&sw_lat=15.784225469587948&sw_lng=-149.006834931625&room_types%5B%5D=Entire%20home%2Fapt&amenities%5B%5D=12&search_type=NAVIGATION_CARD&title_type=CURATED_PROPERTY_TYPE'
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