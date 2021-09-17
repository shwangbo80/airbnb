import React from 'react'
import '../css/TryHosting.css'
import { Container, Image, Button } from 'react-bootstrap'
import FilterCards from '../constants/FilterCards'
import Hosting from './Hosting'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'

const TryHosting = ({ filterCards }) => {
  return (
    <>
      <Container fluid className="position-relative py-4 ps-5 pe-5">
        <figure>
          <Image
            src={
              'https://a0.muscache.com/im/pictures/2595054e-d1d9-4fde-8046-58d51fcb3164.jpg?im_w=2560'
            }
            alt="host"
            className="img-fluid rounded-3 w-100"
          />
          <figcaption className="px-5 position-absolute top-50 start-0 translate-middle-y">
            <p className="h1 fw-bold">Try Hosting</p>
            <p className="w-75 mt-3 fs-6 fw-light lh-1">
              Earn extra income and unlock new opportunities by sharing your
              space.
            </p>
            <a href="/hosting">
              <Button className="mt-4 px-4 py-2 fs-6 fw-normal" variant="light">
                Learn more
              </Button>
            </a>
          </figcaption>
        </figure>
      </Container>
    </>
  )
}

export default TryHosting
