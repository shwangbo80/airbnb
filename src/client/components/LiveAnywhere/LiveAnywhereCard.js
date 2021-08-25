import React from 'react'
import { Col, Image } from 'react-bootstrap'
import img1 from '../../../assets/images/liveanywhere-1.jpg'
import img2 from '../../../assets/images/liveanywhere-2.jpg'
import img3 from '../../../assets/images/liveanywhere-3.jpg'
import img4 from '../../../assets/images/liveanywhere-4.jpg'

const cardTypes = [
  {
    id: 1,
    type: 'Outdoor getaways',
    image: img1
  },
  {
    id: 2,
    type: 'Unique stays',
    image: img2
  },
  {
    id: 3,
    type: 'Entire homes',
    image: img3
  },
  {
    id: 4,
    type: 'Pets allowed',
    image: img4
  },
]

const LiveAnywhereCard = () => {
  return (
    <Col>
      <Col xs={6} md={4}>
        <Image src={img1} rounded />
        <h3>Outdoor getaways</h3>
      </Col>
    </Col>
  )
}

export default LiveAnywhereCard
