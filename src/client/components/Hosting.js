import React from 'react'
import { Container, Row, Col, Button, Carousel, Image } from 'react-bootstrap';

const Hosting = () => {
    return (
        <React.Fragment>
            <Container fluid>
                <Row>
                    <Col md={6} className="text-center text-light bg-dark px-0 d-flex justify-content-center">
                        <div className="align-self-center">
                            <h1>
                                Hosting
                            </h1>
                            <h1>
                                makes Airbnb,
                            </h1>
                            <h1>
                                Airbnb
                            </h1>
                            <Button className="btn-danger mt-4">
                                Try Hosting
                            </Button>
                        </div>

                    </Col>
                    <Col md={6} className="px-0 my-0">
                        <video playsinline="playsinline" autoplay="autoplay" muted="muted" loop="loop" style={{ minWidth: '100%', minHeight: '100%', width: 'auto', height: '100%' }}>
                            <source src="./video/airbnb_sm.mp4" type="video/mp4" />
                        </video>
                    </Col>
                </Row>
                <Container className="p-4">
                    <div className="mt-5 mb-5">
                        <h1>
                            You can host
                        </h1>
                        <h1>
                            anything, anywhere
                        </h1>
                    </div>
                    <Carousel indicators={false}>
                        <Carousel.Item>
                            <Row>
                                <Col md={4} className="px-3">
                                    <Image src="https://a0.muscache.com/im/pictures/e7fd2596-a03c-43a0-acc9-c8f19ade63b9.jpg?im_w=480" alt="Responsive image" className="img-fluid py-3" />
                                    <h4 className="text-light">
                                        Hosting my studio changed my life and gifted me with memorable experiences and people.
                                    </h4>
                                </Col>
                                <Col md={4} className="px-3">
                                    <Image src="https://a0.muscache.com/im/pictures/86dfe10f-cc9e-46bf-b69f-b60a71523f81.jpg?im_w=480" alt="Responsive image" className="img-fluid py-3" />
                                    <h4 className="text-light">
                                        Hosting my home allowed me to become an entrepreneur and laid down a path to financial freedom.
                                    </h4>
                                </Col>
                                <Col md={4} className="px-3">
                                    <Image src="https://a0.muscache.com/im/pictures/b21ec45b-8bac-4f8a-89b1-e967a69018b2.jpg?im_w=480" alt="Responsive image" className="img-fluid py-3" />
                                    <h4 className="text-light">
                                        We’re able to keep our culture alive by hosting our pasta-making experience.                                    </h4>
                                </Col>
                            </Row>
                        </Carousel.Item>
                        <Carousel.Item>
                            <Row>
                                <Col md={4} className="px-3" >
                                    <Image src="https://a0.muscache.com/im/pictures/20a9b238-f685-4041-9538-e3c5e5430d46.jpg?im_w=480" alt="Responsive image" className="img-fluid w-90 py-3" />
                                    <h4 className="text-light">
                                        Hosting my studio changed my life and gifted me with memorable experiences and people.
                                    </h4>
                                </Col>
                                <Col md={4} className="px-3">
                                    <Image src="https://a0.muscache.com/im/pictures/27ab0b1d-a5b7-40a6-a78d-3cfb851aea4e.jpg?im_w=480" alt="Responsive image" className="img-fluid w-90 py-3" />
                                    <h4 className="text-light">
                                        Hosting my bedouin tent has introduced me to people around the world.
                                    </h4>
                                </Col>
                                <Col md={4} className="px-3">
                                    <Image src="https://a0.muscache.com/im/pictures/fbfee215-d5e7-4e99-88ba-1a50101eb69c.jpg?im_w=480" alt="Responsive image" className="img-fluid w-90 py-3" />
                                    <h4 className="text-light">
                                        I love hosting my eco-home so people can connect with nature and their loved ones.
                                    </h4>
                                </Col>
                            </Row>
                        </Carousel.Item>
                    </Carousel>
                </Container >
                <Row fluid className="bg-dark text-center" style={{ height: '1000px', zIndex: "-1", position: 'relative', top: '-300px' }}>
                    <div>
                        <h1 className="text-light" style={{ paddingTop: "500px" }} >
                            Host your home and earn up to $2,247/month
                        </h1>
                        <div>
                            <Button className="btn-danger mt-5">
                                Start Earning
                            </Button>
                        </div>
                    </div>
                </Row>
            </Container >
        </React.Fragment >
    )
}

export default Hosting;
