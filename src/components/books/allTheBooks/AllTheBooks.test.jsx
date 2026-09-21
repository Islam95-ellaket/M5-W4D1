import { render } from "@testing-library/react"
import { test, expect, vi } from "vitest"
import AllTheBooks from "./AllTheBooks"
import { BookContext } from "../../../contexts/BookContext"
import { ThemeContext } from "../../../contexts/ThemeContext"

vi.mock("../../comments/CommentArea/CommentArea", () => ({
    default: () => <div>CommentArea</div>
}))

const books = Array.from({ length: 12 }, (_, index) => ({
    asin: `asin-${index}`,
    title: `Book ${index}`,
    category: "fantasy",
    img: `image-${index}.jpg`,
    price: 10
}))

test("verifica quante Book Card vengono visualizzate", () => {
    render(
        <ThemeContext.Provider value={{ isDarkMode: false }}>
            <BookContext.Provider
                value={{
                    filteredBooks: books,
                    searchQuery: "",
                    isLoading: false,
                    error: null
                }}
            >
                <AllTheBooks />
            </BookContext.Provider>
        </ThemeContext.Provider>
    )

    const bookCards = document.querySelectorAll(".book-card")

    expect(bookCards).toHaveLength(12)
})
