import { render, screen } from "@testing-library/react"
import App from "./App"

describe("Test EpiBooks", () => {

    test("controlla che appaia il messaggio di benvenuto", () => {

        render(<App />)

        expect(
            screen.getByText("BENVENUTI SUL SITO")
        ).toBeInTheDocument()

    })

})

