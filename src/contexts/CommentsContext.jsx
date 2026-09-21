import { createContext, useContext, useState } from "react"

export const CommentsContext = createContext()

const TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2YTYyMjhkMzIxMDU5ZjAwMTVlMjNhMDgiLCJpYXQiOjE3ODkzOTY2MDcsImV4cCI6MTc5MDYwNjIwN30.CH2OP-V3ofBu3eGpBD48JNm1SgOExmpUNuBlsIYI9lM"

export const CommentsProvider = ({ children }) => {
    const [comments, setComments] = useState([])
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState("")

    const getComments = async (asin) => {
        if (!asin) {
            setComments([])
            return
        }

        setIsLoading(true)
        setError("")

        try {
            const response = await fetch(
                `https://striveschool-api.herokuapp.com/api/books/${asin}/comments`,
                {
                    headers: {
                        Authorization: `Bearer ${TOKEN}`
                    }
                }
            )

            if (!response.ok) {
                throw new Error(`Errore ${response.status}`)
            }

            const data = await response.json()
            setComments(data)
        } catch (error) {
            console.error(error)
            setError("Errore durante il caricamento dei commenti")
        } finally {
            setIsLoading(false)
        }
    }

    return (
        <CommentsContext.Provider
            value={{
                comments,
                isLoading,
                error,
                getComments,
                token: TOKEN
            }}
        >
            {children}
        </CommentsContext.Provider>
    )
}

export const useComments = () => {
    return useContext(CommentsContext)
}