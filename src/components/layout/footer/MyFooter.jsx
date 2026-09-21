import { Container, Row, Col } from 'react-bootstrap'

const MyFooter = () => {
  return (
    <footer className="bg-dark text-white py-4 text-center mt-auto">
      <Container>
        <Row className="gy-3">
          <Col md={4}>
            <h5>EpiBooks</h5>
            <p className="small mb-0">
              La tua libreria digitale di fiducia. Esplora il nostro catalogo,
              scopri nuovi autori e leggi le recensioni della community.
            </p>
          </Col>
          <Col md={4}>
            <h5>Navigazione</h5>
            <ul className="list-unstyled mb-0">
              <li>
                <a href="/" className="text-white text-decoration-none">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="text-white text-decoration-none">
                  Sfoglia Libri
                </a>
              </li>
              <li>
                <a href="#" className="text-white text-decoration-none">
                  Informazioni
                </a>
              </li>
            </ul>
          </Col>
          <Col md={4}>
            <h5>Contatti & Supporto</h5>
            <p className="small mb-1">Email: supporto@epibooks.com</p>
            <p className="small mb-0">Tel: +39 06 123 4567</p>
          </Col>
        </Row>
        <hr className="my-3 border-secondary" />
        <Row>
          <Col>
            <p className="small mb-0">
              &copy; {new Date().getFullYear()} EpiBooks. Tutti i diritti riservati.
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}

export default MyFooter