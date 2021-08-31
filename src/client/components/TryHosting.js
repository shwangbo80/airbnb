import React from 'react'
import '../css/TryHosting.css'
import { Container, Image, Button } from 'react-bootstrap'
// import img1 from '../../assets/images/tryhosting-1.jpg'

const TryHosting = ({ img, title, desc, buttonText }) => {
  return (
    <a href='https://airbnb.com/'>
      <Container fluid className='position-relative py-4 ps-5 pe-5'>
        <figure>
          <Image src={img} alt='host' className='img-fluid rounded-3' />
          <figcaption className='px-5 position-absolute top-50 start-0 translate-middle-y'>
            <p className='h1 fw-bold'>{title}</p>
            <p className='w-75 mt-3 fs-6 fw-light lh-1'>{desc}</p>
            <Button className='mt-4 px-4 py-2 fs-6 fw-normal' variant='light'>{buttonText}</Button>
          </figcaption>
        </figure>
      </Container>
    </a>
  )
}

export default TryHosting
