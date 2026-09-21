import { createContext, useContext, useEffect, useState } from "react"

export const BookContext = createContext()

export const BookProvider = ({ children }) => {

    const [booksData, setBooksData] = useState([])
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState('')

    const [search, setSearch] = useState('')
    const [searchQuery, setSearchQuery] = useState('')

    const getBooks = async () => {
        setIsLoading(true)
        setError('')

        try {
            const response = await fetch(
                'https://epibooks.onrender.com/'
            )

            const data = await response.json()

            setBooksData(data)
        } catch (error) {
            console.error(error)
            setError('Errore durante il caricamento dei libri')
        } finally {
            setIsLoading(false)
        }
    }

    useEffect(() => {
        getBooks()
    }, [])

    // Gestisce quello che viene scritto nell'input
    const handleSearchChange = (e) => {
        setSearch(e.target.value)
    }

    // Esegue la ricerca
    const handleSearch = (e) => {
        e.preventDefault()
        setSearchQuery(search)
    }

    const normalizeSearch = searchQuery
        .toLowerCase()
        .trim()

    const filteredBooks = booksData.filter((book) =>
        book.title
            .toLowerCase()
            .includes(normalizeSearch)
    )

    return (
        <BookContext.Provider
            value={{
                booksData,
                isLoading,
                error,
                getBooks,

                search,
                handleSearchChange,
                handleSearch,

                searchQuery,
                filteredBooks
            }}
        >
            {children}
        </BookContext.Provider>
    )
}

export const useBooks = () => useContext(BookContext)
