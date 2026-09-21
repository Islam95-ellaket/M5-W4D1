import { Container, Row, Col, Modal } from 'react-bootstrap'
import './allTheBooks.css'
import SingleBook from '../singlelBook/SingleBook'
import CommentArea from '../../comments/CommentArea/CommentArea'
import AlertBooks from '../../feedBack/alertBooks/AlertBooks'
import Loadingindicator from '../../feedBack/loadingIndicator/Loadingindicator'
import { useContext, useState } from 'react'
import { BookContext } from '../../../contexts/BookContext'
import { ThemeContext } from '../../../contexts/ThemeContext'

const AllTheBooks = () => {
    // COntext di DarkMode
    const { isDarkMode } = useContext(ThemeContext)
    const bg = isDarkMode ? "bg-dark" : "bg-light"

    //Stato per salvare l'ASIN qui per passarlo sia ai libri che ai commenti
    const [selected, setSelected] = useState(null)
    const [showModal, setShowModal] = useState(false)

    const closeModal = () => {
        setShowModal(false)
    }
    // Se clicco sullo stesso libro si deseleziona, altrimenti salva il nuovo ASIN
    const changeSelectedBook = (newAsin) => {
        if (selected === newAsin) {
            setSelected(null)
            setShowModal(false)
        } else {
            setSelected(newAsin)

            // Apre la modale solo su mobile
            if (window.innerWidth < 768) {
                setShowModal(true)
            }
        }
    }

    const {
        filteredBooks,
        searchQuery,
        isLoading,
        error
    } = useContext(BookContext)

    return (
        <div className={`min-vh-100 ${bg}`}>
            <Container fluid className="px-4">
                <div className="py-3">
                    {isLoading && !error && (
                        <div className="w-100">
                            <Loadingindicator />
                        </div>
                    )}

                    {/* Mostra un errore se la chiamata API fallisce */}
                    {!isLoading && error && (
                        <div className="w-100">
                            <AlertBooks
                                variant="warning"
                                title="Oops..."
                                message={error}
                            />
                        </div>
                    )}

                    {!isLoading && !error && (
                        <>
                            {/* Avviso se la ricerca non trova nessun libro */}
                            {filteredBooks.length === 0 && searchQuery.trim() !== '' ? (
                                <div className="w-100">
                                    <AlertBooks
                                        variant="warning"
                                        title="Libro non trovato"
                                        message={`Non abbiamo trovato nessun libro per "${searchQuery}"`}
                                    />
                                </div>
                            ) : (
                                <Row className="g-3">
                                    <Col md={7} lg={8}>
                                        <Row className="g-3">
                                            {filteredBooks.map((book, index) => (
                                                <Col
                                                    key={`book${book.asin}${index}`}
                                                    xs={12}
                                                    sm={6}
                                                    md={6}
                                                    lg={4}
                                                    xl={3}
                                                >
                                                    <SingleBook
                                                        img={book.img}
                                                        title={book.title}
                                                        category={book.category}
                                                        asin={book.asin}
                                                        price={book.price}
                                                        selected={selected}
                                                        changeSelectedBook={changeSelectedBook}
                                                    />
                                                </Col>
                                            ))}
                                        </Row>
                                    </Col>

                                    <Col md={5} lg={4}>
                                        <div className="sticky-top sticky-comments">
                                            <CommentArea asin={selected} />
                                        </div>
                                    </Col>
                                </Row>
                            )}
                        </>
                    )}
                </div>
            </Container>

            <Modal
                className='d-flex flex-wrap w-100'
                show={showModal}
                onHide={closeModal}
                centered
                fullscreen="sm-down"
            >
                <Modal.Header
                    closeButton
                    className={isDarkMode ? "bg-dark text-light border-secondary" : "bg-light text-dark"}
                >
                    <Modal.Title>
                        Recensioni
                    </Modal.Title>
                </Modal.Header>

                <Modal.Body
                    className={isDarkMode ? "bg-dark text-light" : "bg-light text-dark"}
                >
                    <CommentArea
                        asin={selected}
                    />
                </Modal.Body>
            </Modal>
            
        </div>
    )
}

export default AllTheBooks