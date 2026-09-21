import { Container, Nav, Navbar } from 'react-bootstrap'
import './MyNav.css'
import IconNav from '../../../assets/img/IconNav.png'
import BookSearchBar from '../../books/bookSearchBar/BookSearchBar'
import { Sun, Moon } from "lucide-react"
import { useContext } from 'react'
import { ThemeContext } from '../../../contexts/ThemeContext'
import { useBooks } from '../../../contexts/BookContext'
import { Link } from 'react-router-dom'
import AboutUs from './../../../pages/aboutUs/AboutUs';

const MyNav = () => {
    const { isDarkMode, toggleTheme } = useContext(ThemeContext)

    const {
        search,
        handleSearchChange,
        handleSearch
    } = useBooks()

    const theme = isDarkMode ? "dark" : "light"

    return (
        <Navbar
            expand="md"
            bg={isDarkMode ? "dark" : "light"}
            data-bs-theme={theme}
            className="border-bottom sticky-top w-100"
        >
            <Container fluid className="px-3">
                <Navbar.Brand as={Link} to="/" className="d-flex align-items-center">
                    <img
                        src={IconNav}
                        alt="All The Books"
                        width={65}
                        height={55}
                        className="object-fit-contain"
                    />
                </Navbar.Brand>

                <Navbar.Toggle aria-controls="basic-navbar-nav" />

                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto d-flex gap-2 align-items-center my-2 my-lg-0">
                        <Nav.Link as={Link} to="/">Home</Nav.Link>
                        <Nav.Link as={Link} to="/about-us">About</Nav.Link>
                        <Nav.Link href="#">Browse</Nav.Link>
                    </Nav>

                    <div className="d-flex align-items-center gap-2 mt-2 mt-lg-0">
                        <div className="flex-grow-1">
                            <BookSearchBar
                                search={search}
                                handleSearchChange={handleSearchChange}
                                handleSearch={handleSearch}
                            />
                        </div>

                        <button
                            onClick={toggleTheme}
                            className={`btn d-flex align-items-center justify-content-center rounded-circle p-2
                                ${isDarkMode ? 'btn-outline-light' : 'btn-outline-dark'}`}
                            type="button"
                        >
                            {isDarkMode ? <Sun size={22} /> : <Moon size={22} />}
                        </button>
                    </div>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default MyNav