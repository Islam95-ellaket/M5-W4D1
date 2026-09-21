import { useContext, useState } from "react"
import { Container, Card, Button } from "react-bootstrap"
import { useNavigate } from "react-router-dom"
import './singleBook.css'
import { ThemeContext } from "../../../contexts/ThemeContext"

const SingleBook = ({
    img,
    title,
    category,
    asin,
    price,
    selected,
    changeSelectedBook
}) => {
    const { isDarkMode } = useContext(ThemeContext)
    const [showDetails, setShowDetails] = useState(false)
    const theme = isDarkMode ? "dark" : "light"

    const navigate = useNavigate()

    // Quando la Card viene cliccata, salva l'ASIN nel padre
    const onCardClick = () => {
        changeSelectedBook(asin)
    }

    const handleDetailsClick = (e) => {
        e.stopPropagation()
        setShowDetails(!showDetails)
    }

    // Gestione della navigazione verso BookDetails
    const handleGoToBookDetails = (e) => {
        e.stopPropagation()
        navigate(`/book/${asin}`)
    }

    const categoryColors = {
        fantasy: "category-fantasy",
        history: "category-history",
        romance: "category-romance",
        scifi: "category-scifi",
        horror: "category-horror"
    }

    const categoryShadows = {
        fantasy: "shadow-fantasy",
        history: "shadow-history",
        romance: "shadow-romance",
        scifi: "shadow-scifi",
        horror: "shadow-horror"
    }

    return (
        <Container className="p-0">
            <Card
                onClick={onCardClick}
                className={`book-card p-1 mb-3 rounded-4
                    ${categoryShadows[category?.toLowerCase()] || ""}
                    ${selected === asin ? "border-3 border-danger" : ""}`}
                data-bs-theme={theme}
            >
                <Card.Img
                    className="rounded-3 img-fluid"
                    variant="top"
                    src={img}
                />

                {!showDetails && (
                    <Button
                        variant="outline-primary"
                        className="mt-2 rounded-3"
                        onClick={handleDetailsClick}
                    >
                        Mostra dettagli
                    </Button>
                )}

                {showDetails && (
                    <>
                        <Card.Body>
                            <Card.Title className="fs-6 ">
                                {title}
                            </Card.Title>

                            <Card.Text
                                className={`${categoryColors[category?.toLowerCase()] || ""} fw-semibold`}
                            >
                                {category}
                            </Card.Text>

                            <Card.Text>
                                <span className="fw-bolder pe-1">
                                    Asin:
                                </span>
                                {asin}
                            </Card.Text>

                            <div className="d-flex align-items-center justify-content-between mt-2">
                                <span className="fw-bold fs-5 text-success m-0">
                                    €{price.toFixed(2)}
                                </span>

                                <Button
                                    variant="primary"
                                    size="sm"
                                    className="rounded-3"
                                    onClick={handleGoToBookDetails}
                                >
                                    Dettagli
                                </Button>
                            </div>
                        </Card.Body>

                        <Button
                            variant="outline-info"
                            className="mt-2 rounded-3"
                            onClick={handleDetailsClick}
                        >
                            Nascondi
                        </Button>
                    </>
                )}
            </Card>
        </Container>
    )
}

export default SingleBook