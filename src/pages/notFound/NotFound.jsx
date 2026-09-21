import { Container, Row, Col, Button } from "react-bootstrap"
import { Link } from "react-router-dom"
import { House } from "lucide-react"

const NotFound = () => {
  return (
    <Container className="d-flex align-items-center justify-content-center min-vh-100 text-center py-5">
      <Row className="justify-content-center w-100">
        <Col md={8} lg={6}>
          <h1 className="display-1 fw-bold text-danger mb-2">404</h1>

          <h2 className="fw-semibold mb-3">Ops! Sembra che qualcosa sia andato storto...</h2>
          
          <p className="text-muted fs-5 mb-4">
            Non riusciamo a trovare quello che stai cercando. Torna alla pagina iniziale o controlla di aver digitato correttamente l'URL.
          </p>

          <Button
            as={Link}
            to="/"
            variant="primary"
            size="lg"
            className="d-inline-flex align-items-center gap-2 rounded-pill px-4 shadow-sm"
          >
            <House size={18} />
            Riportami alla Home
          </Button>
        </Col>
      </Row>
    </Container>
  )
}

export default NotFound