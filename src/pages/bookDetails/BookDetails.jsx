import { useContext, useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { Container, Row, Col, Card } from "react-bootstrap"

import "./bookDetails.css"

import CommentArea from "../../components/comments/CommentArea/CommentArea"
import Loadingindicator from "../../components/feedBack/loadingIndicator/Loadingindicator"
import BaseLayout from "../../layouts/BaseLayout"

import { ThemeContext } from "../../contexts/ThemeContext"
import { useBooks } from "../../contexts/BookContext"

const BookDetails = () => {
  const { isDarkMode } = useContext(ThemeContext)

  const { asin } = useParams()

  // Recupera i dati dei libri dal BookContext
  const {
    booksData,
    isLoading,
    error
  } = useBooks()

  // Stato che contiene il libro selezionato
  const [book, setBook] = useState(null)

  // Cerca il libro quando cambia l'ASIN o quando arrivano i libri
  useEffect(() => {

    const selectedBook = booksData.find(
      book => book.asin === asin
    )

    setBook(selectedBook || null)

  }, [asin, booksData])

  const theme = isDarkMode ? "dark" : "light"

  if (isLoading) {
    return (
      <BaseLayout>

        <div
          data-bs-theme={theme}
          className={`book-details-page ${isDarkMode
              ? "bg-dark text-light"
              : "bg-light text-dark"
            }`}
        >

          <Container className="py-5">
            <Loadingindicator />
          </Container>

        </div>

      </BaseLayout>
    )
  }

  if (error) {
    return (
      <BaseLayout>

        <div
          data-bs-theme={theme}
          className={`book-details-page ${isDarkMode
              ? "bg-dark text-light"
              : "bg-light text-dark"
            }`}
        >

          <Container className="py-5">

            <h2>Si è verificato un errore</h2>

            <p>{error}</p>

          </Container>

        </div>

      </BaseLayout>
    )
  }

  // Il caricamento è terminato ma l'ASIN non esiste
  if (!book) {
    return (
      <BaseLayout>

        <div
          data-bs-theme={theme}
          className={`book-details-page ${isDarkMode
              ? "bg-dark text-light"
              : "bg-light text-dark"
            }`}
        >

          <Container className="py-5">

            <h2>Libro non trovato</h2>

            <p>
              Non esiste nessun libro con ASIN:{" "}
              <strong>{asin}</strong>
            </p>

          </Container>

        </div>

      </BaseLayout>
    )
  }

  return (
    <BaseLayout>

      <div
        data-bs-theme={theme}
        className={`book-details-page ${isDarkMode
            ? "bg-dark text-light"
            : "bg-light text-dark"
          }`}
      >

        <Container className="py-4">

          <Row className="g-4 align-items-start">

            <Col md={6}>

              <Card
                className={`book-details-card shadow-sm ${isDarkMode
                    ? "bg-secondary text-light"
                    : "bg-white text-dark"
                  }`}
              >

                <Card.Img
                  variant="top"
                  src={book.img}
                  alt={book.title}
                  className="book-details-cover"
                />

                <Card.Body className="p-4">

                  <Card.Title className="book-details-title">
                    {book.title}
                  </Card.Title>

                  <Card.Text>
                    <strong>Categoria:</strong>{" "}
                    {book.category}
                  </Card.Text>

                  <Card.Text>
                    <strong>ASIN:</strong>{" "}
                    {book.asin}
                  </Card.Text>

                  <Card.Text className="book-details-price">
                    €{book.price.toFixed(2)}
                  </Card.Text>

                </Card.Body>

              </Card>

            </Col>

            <Col md={6}>

              <CommentArea
                asin={book.asin}
              />

            </Col>

          </Row>

        </Container>

      </div>

    </BaseLayout>
  )
}

export default BookDetails