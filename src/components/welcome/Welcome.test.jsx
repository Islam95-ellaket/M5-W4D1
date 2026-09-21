import { render, screen } from "@testing-library/react"
import Welcome from "./Welcome"
import { ThemeProvider } from "../../contexts/ThemeContext"
import { BookProvider } from "../../contexts/BookContext"

describe("Welcome component", () => {

    test("render of welcome", () => {

        render(
            <ThemeProvider>
                <BookProvider>
                    <Welcome />
                </BookProvider>
            </ThemeProvider>
        )

        expect(
            screen.getByText("BENVENUTI SUL SITO")
        ).toBeInTheDocument()

        expect(
            screen.getByText("EpiBooks")
        ).toBeInTheDocument()

    })

})