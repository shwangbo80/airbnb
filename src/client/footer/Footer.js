import Button from '@restart/ui/esm/Button'
import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { Globe, Facebook, Twitter, Instagram } from 'react-bootstrap-icons'

const Footer = () => {
  return (
    <React.Fragment>
      <Container fluid>
        <Row className="d-flex justify-content-between text-center">
          <Col lg={6}>
            <div className="d-inline-flex mt-3">
              <a href="#home" class="mx-3 text-decoration-none text-dark">© 2021 Airbnb, Inc </a>
              <a href="#features" class="mx-3 text-decoration-none text-dark">· Privacy</a>
              <a href="#pricing" class="mx-3 text-decoration-none text-dark">· Terms</a>
              <a href="#pricing" class="mx-3 text-decoration-none text-dark">· Sitemap</a>
            </div>
          </Col>
          <Col lg={6}>
            <div className="d-inline-flex mt-3">
              <Globe size={12} className="mt-2" />
              <a href="#home" class="mx-1 text-decoration-none text-dark">
                <p>English(US)</p>
              </a>
              <a href="#features" className="mx-3 text-decoration-none text-dark" >
                <p>$ USD</p>
              </a>
              <a href="https://www.facebook.com" >
                <Facebook size={24} className="mx-3 text-decoration-none text-dark" />
              </a>
              <a href="https://www.twitter.com">
                <Twitter size={24} className="mx-2 text-decoration-none text-dark" />
              </a>
              <a href="https://www.instagram.com">
                <Instagram size={24} className="mx-2 text-decoration-none text-dark" />
              </a>
            </div>
          </Col>
        </Row>
      </Container >
    </React.Fragment >
  )
}

export default Footer