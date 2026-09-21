import { BrowserRouter, Routes, Route } from "react-router-dom"
import HomePage from "./pages/homePage/HomePage.jsx"
import AboutUs from './pages/aboutUs/AboutUs.jsx'
import BookDetails from './pages/bookDetails/BookDetails.jsx'
import NotFound from "./pages/notFound/NotFound.jsx"
import { ThemeProvider } from "./contexts/ThemeContext"
import { BookProvider } from "./contexts/BookContext"
import { CommentsProvider } from "./contexts/CommentsContext"

const App = () => {

    return (

        <ThemeProvider>

            <BookProvider>

                <CommentsProvider>

                    <BrowserRouter>

                        <Routes>

                            <Route
                                index
                                path="/"
                                element={<HomePage />}
                            />

                            <Route
                                path="/about-us"
                                element={<AboutUs />}
                            />

                            <Route
                                path="/book/:asin"
                                element={<BookDetails />}
                            />

                            <Route
                                path="*"
                                element={<NotFound />}
                            />


                        </Routes>

                    </BrowserRouter>

                </CommentsProvider>

            </BookProvider>

        </ThemeProvider>

    )
}

export default App
