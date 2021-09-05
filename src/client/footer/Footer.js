import React from 'react'
import { Container, Navbar, Nav } from 'react-bootstrap'
import { Globe, Facebook, Twitter, Instagram } from 'react-bootstrap-icons'

const Footer = () => {
  return (
    <>
      <Container fluid>
        <Navbar bg="light" variant="light">
          <Container fluid>
            <Nav className="">
              <Nav.Link href="#home">© 2021 Airbnb, Inc.</Nav.Link>
              <Nav.Link href="#features">· Privacy</Nav.Link>
              <Nav.Link href="#pricing">· Terms</Nav.Link>
              <Nav.Link href="#pricing">· Sitemap</Nav.Link>
            </Nav>
            <Nav className="">
              <Globe size={12} className="mt-3" />
              <Nav.Link href="#home">
                <p>English(US)</p>
              </Nav.Link>
              <Nav.Link href="#features" className="mx-3" >
                <p>$ USD</p>
              </Nav.Link>
              <Nav.Link href="https://www.facebook.com" >
                <Facebook size={24} className="mx-3" />
              </Nav.Link>
              <Nav.Link href="https://www.twitter.com">
                <Twitter size={24} className="mx-2" />
              </Nav.Link>
              <Nav.Link href="https://www.instagram.com">
                <Instagram size={24} className="mx-2" />
              </Nav.Link>
            </Nav>
          </Container>
        </Navbar>
      </Container>
    </>
  )
}

export default Footer