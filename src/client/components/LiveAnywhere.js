import React from 'react'
// import '../css/LiveAnywhere.css'
import { Container, Row, Col, Image } from 'react-bootstrap'
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

const cardImage1 = cards[0].img
const cardImage2 = cards[1].img
const cardImage3 = cards[2].img
const cardImage4 = cards[3].img
const cardImagesArr = [cardImage1, cardImage2, cardImage3, cardImage4]

const cardTitle1 = cards[0].title
const cardTitle2 = cards[1].title
const cardTitle3 = cards[2].title
const cardTitle4 = cards[3].title
const cardTitlesArr = [cardTitle1, cardTitle2, cardTitle3, cardTitle4]

const LiveAnywhere = () => {
  return (
    <>
      <Container>
        <h2>Live anywhere</h2>
        <Row>
          {cardImagesArr.map((card, index) => {
            const cardTitle = cardTitlesArr[index]
            return (
              <Col>
                <Image key={index} src={card} />
                <h3>{cardTitle}</h3>
              </Col>
            )
          })}
        </Row>
      </Container>
    </>
  )
}
export default LiveAnywhere
