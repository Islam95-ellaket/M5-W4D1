import { BookSearch } from 'lucide-react'
import { Row, Col, Button } from 'react-bootstrap'

const BookSearchBar = ({
    search,
    handleSearchChange,
    handleSearch
}) => {

    return (
        <Row>
            <Col>
                <form
                    onSubmit={handleSearch}
                    className="my-4 gap-2 text-end d-flex align-items-center justify-content-end"
                >

                    <input
                        value={search}
                        onChange={handleSearchChange}
                        className="text-center fs-5 form-control w-100"
                        type="text"
                        name="search"
                        placeholder="Cerca qui il tuo Libro..."
                    />

                    <Button
                        className="btn btn-primary d-flex align-items-center justify-content-center p-2"
                        size="sm"
                        type="submit"
                    >
                        <BookSearch />
                    </Button>

                </form>
            </Col>
        </Row>
    )
}

export default BookSearchBar
