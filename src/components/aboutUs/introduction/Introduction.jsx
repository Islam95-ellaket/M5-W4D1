import { Container, Button, Card, Row, Col } from 'react-bootstrap'
import epiBooks from '../../../assets/img/epiBooks.jpg'
import './introduction.css'


const Introduction = () => {
    return (
        <Container className="text-center my-5">
            <h1 className="fw-bold mb-3">Chi Siamo</h1>

            <p className="lead text-muted mx-auto mb-5" style={{ maxWidth: '600px' }}>
                Benvenuti su <strong>EpiBooks</strong>! La nostra missione è connettere le persone con i migliori libri,
                offrendo una piattaforma semplice e intuitiva per scoprire nuove letture, recensioni e autori.
            </p>

            <Row className="justify-content-center mb-3">
                <Col xs={12} md={8}>
                    <Card className="border-0 shadow-sm overflow-hidden">
                        <Card.Img
                            variant="top"
                            src={epiBooks}
                            alt="Libreria epiBooks"
                            className="about-img"
                        />
                    </Card>
                </Col>
            </Row>

            <div>
                <h4 className="mb-3">Pronto a trovare la tua prossima lettura?</h4>
                <Button variant="primary" size="lg" href="/">
                    Sfoglia il Catalogo
                </Button>
            </div>
        </Container>
    )
}

export default Introduction


