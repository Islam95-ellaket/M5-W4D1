
import { render, screen } from "@testing-library/react"
import { test, expect } from "vitest"
import App from "../../../App"

test("Books Cards Render", async () => {
    render(<App />)

    const bookImages = await screen.findAllByRole("img")

    const bookImagesOnly = bookImages.filter(
        (img) => img.alt === "book cover"
    )

    expect(bookImagesOnly).toHaveLength(12)
})
