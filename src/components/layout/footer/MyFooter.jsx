import {Container, Row, Col } from 'react-bootstrap';

const MyFooter = () => {
    return (
        <footer className="bg-dark text-white mt-1 p-4 text-center">
            <Container>
                <Row>
                    <Col md={4}>
                        <h5>About Us</h5>
                        <p>We provide excellent services and solutions.</p>
                    </Col>
                    <Col md={4}>
                        <h5>Links</h5>
                        <ul className="list-unstyled">
                            <li><a href="/" className="text-white">Home</a></li>
                            <li><a href="/services" className="text-white">Services</a></li>
                            <li><a href="/contact" className="text-white">Contact</a></li>
                        </ul>
                    </Col>
                    <Col md={4}>
                        <h5>Contact</h5>
                        <p>Email: info@example.com</p>
                        <p>Phone: +1234567890</p>
                    </Col>
                </Row>
                <Row>
                    <Col className="mt-3">
                        <p>&copy; {new Date().getFullYear()} Your Company. All rights reserved.</p>
                    </Col>
                </Row>
            </Container>
        </footer>
    )
}

export default MyFooter;
