import React from 'react'
import { Container, Row, Col, Button, Image, Navbar } from 'react-bootstrap';
import Footer from '../footer/Footer'
import DirectoryFooter from '../footer/DirectoryFooter';

const Hosting = () => {
    return (
        <React.Fragment>
            <Container fluid>

                <Row>
                    <Col md={6} className="text-light bg-dark px-0 " style={{ height: '1000px' }}>
                        <div>
                            <Navbar bg="dark mx-5">
                                <Navbar.Brand href="/">
                                    <img
                                        src="/airbnblogo.png"
                                        width="30"
                                        height="30"
                                        className="d-inline-block align-top"
                                        alt="React Bootstrap logo"
                                    />
                                </Navbar.Brand>
                            </Navbar>
                        </div>
                        <div className="d-flex h-100 justify-content-center">
                            <div className="justify-content-center align-self-center">
                                <h1 className='display-4'>
                                    Hosting
                                </h1>
                                <h1 className='display-4'>
                                    makes Airbnb,
                                </h1>
                                <h1 className='display-4'>
                                    Airbnb
                                </h1>
                                <Button className="btn-danger btn-lg mt-4">
                                    Try Hosting
                                </Button>
                            </div>
                        </div>

                    </Col>
                    <Col md={6} className="px-0 my-0 bg-dark d-flex">
                        <video className="w-100" playsinline="playsinline" autoplay="autoplay" muted="muted" loop="loop" style={{ height: '1000px', objectFit: 'cover' }}>
                            <source src="./video/airbnb_sm.mp4" type="video/mp4" />
                        </video>
                    </Col>
                </Row>
                <Container style={{ marginTop: '200px' }}>
                    <div >
                        <h1 className='display-4'>
                            You can host
                        </h1>
                        <h1 className='display-4 mb-5'>
                            anything, anywhere
                        </h1>
                    </div>
                    <Row>
                        <Col md={4} className="px-3">
                            <Image src="https://a0.muscache.com/im/pictures/e7fd2596-a03c-43a0-acc9-c8f19ade63b9.jpg?im_w=480" alt="Responsive image" className="img-fluid py-3" />
                            <h6 className="text-dark">
                                Hosting my studio changed my life and gifted me with memorable experiences and people.
                            </h6>
                        </Col>
                        <Col md={4} className="px-3">
                            <Image src="https://a0.muscache.com/im/pictures/86dfe10f-cc9e-46bf-b69f-b60a71523f81.jpg?im_w=480" alt="Responsive image" className="img-fluid py-3" />
                            <h6 className="text-dark">
                                Hosting my home allowed me to become an entrepreneur and laid down a path to financial freedom.
                            </h6>
                        </Col>
                        <Col md={4} className="px-3">
                            <Image src="https://a0.muscache.com/im/pictures/b21ec45b-8bac-4f8a-89b1-e967a69018b2.jpg?im_w=480" alt="Responsive image" className="img-fluid py-3" />
                            <h6 className="text-dark">
                                We’re able to keep our culture alive by hosting our pasta-making experience.
                            </h6>
                        </Col>
                    </Row>
                    <Row>
                        <Col md={4} className="px-3" >
                            <Image src="https://a0.muscache.com/im/pictures/20a9b238-f685-4041-9538-e3c5e5430d46.jpg?im_w=480" alt="Responsive image" className="img-fluid w-90 py-3" />
                            <h6 className="text-dark">
                                Hosting my studio changed my life and gifted me with memorable experiences and people.
                            </h6>
                        </Col>
                        <Col md={4} className="px-3">
                            <Image src="https://a0.muscache.com/im/pictures/27ab0b1d-a5b7-40a6-a78d-3cfb851aea4e.jpg?im_w=480" alt="Responsive image" className="img-fluid w-90 py-3" />
                            <h6 className="text-dark">
                                Hosting my bedouin tent has introduced me to people around the world.
                            </h6>
                        </Col>
                        <Col md={4} className="px-3">
                            <Image src="https://a0.muscache.com/im/pictures/fbfee215-d5e7-4e99-88ba-1a50101eb69c.jpg?im_w=480" alt="Responsive image" className="img-fluid w-90 py-3" />
                            <h6 className="text-dark">
                                I love hosting my eco-home so people can connect with nature and their loved ones.
                            </h6>
                        </Col>
                    </Row>
                </Container >
                <div className="text-center">
                    <Row className="bg-dark" style={{ height: '800px', marginTop: '200px', paddingTop: '300px' }}>
                        <div>
                            <h1 className="text-light display-4">
                                Host your home and earn up to $2,247/month
                            </h1>
                            <div>
                                <Button className="btn-danger btn-lg mt-5">
                                    Start Earning
                                </Button>
                            </div>
                        </div>
                    </Row>
                </div>
                <Container style={{ marginTop: '200px' }}>
                    <div>
                        <h1 className="text-dark display-4">
                            We’ll help you bring
                        </h1>
                        <h1 className="text-dark display-4 mb-5">
                            the art of hosting to life
                        </h1>
                    </div>
                    <Row>
                        <Col md={3}>
                            <Image fluid rounded src='https://a0.muscache.com/im/pictures/4e53901b-370f-4bdd-ae31-6d70b724915b.jpg?im_q=highq&im_w=720' />
                            <h3>
                                Learn
                            </h3>
                            <h4>
                                how we support Hosts
                            </h4>
                        </Col>
                        <Col md={3}>
                            <Image fluid rounded src='https://a0.muscache.com/im/pictures/046c4df1-5158-436c-b0ea-12cd81d02906.jpg?im_q=highq&im_w=720' />
                            <h3>
                                Join
                            </h3>
                            <h4>
                                an online class
                            </h4>
                        </Col>
                        <Col md={3}>
                            <Image fluid rounded src='https://a0.muscache.com/im/pictures/4e53901b-370f-4bdd-ae31-6d70b724915b.jpg?im_q=highq&im_w=720' />
                            <h3>
                                Ask
                            </h3>
                            <h4>
                                a Superhose
                            </h4>
                        </Col>
                        <Col md={3}>
                            <Image fluid rounded src='https://a0.muscache.com/im/pictures/046c4df1-5158-436c-b0ea-12cd81d02906.jpg?im_q=highq&im_w=720' />
                            <h3>
                                Host
                            </h3>
                            <h4>
                                your experience
                            </h4>
                        </Col>
                    </Row>
                </Container >
                <div>

                    <Row style={{ marginTop: '200px' }}>
                        <Col md={6} className="px-0 bg-dark">
                            <div className='d-flex'>
                                <video className="w-100" playsinline="playsinline" autoplay="autoplay" muted="muted" loop="loop" style={{ height: '1000px', objectFit: 'cover' }}>
                                    <source src="./video/airbnb_sm_2.mp4" type="video/mp4" />
                                </video>
                            </div>
                        </Col>
                        <Col md={6} className="px-0 my-0 text-center text-light bg-dark d-flex justify-content-center" style={{ height: '1000px' }}>
                            <div className="align-self-center">
                                <h1 className='display-4' style={{ marginTop: '100px' }}>
                                    Try hosting on
                                </h1>
                                <h1 className='display-4'>
                                    Airbnb
                                </h1>
                                <h5>
                                    Join us.We’ll help you every
                                    <br />
                                    step of the way.
                                </h5>
                                <Button className="btn-danger btn-lg mt-4" style={{ marginBottom: '100px' }}>
                                    Let's go!
                                </Button>
                            </div>
                        </Col>
                    </Row>
                </div>
                <DirectoryFooter />
                <Footer />
            </Container >
        </React.Fragment >
    )
}

export default Hosting;
