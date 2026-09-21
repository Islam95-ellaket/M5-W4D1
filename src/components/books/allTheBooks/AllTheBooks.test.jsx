import { render, screen } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import { vi } from 'vitest'
import AllTheBooks from './AllTheBooks'
import { BookContext } from '../../../contexts/BookContext'
import { ThemeContext } from '../../../contexts/ThemeContext'

// 1. Mockiamo CommentArea per evitare che richieda il suo Context
vi.mock('../../comments/CommentArea/CommentArea', () => ({
  default: () => <div data-testid="comment-area-mock" />
}))

const mockBooks = [
  { asin: '001', title: 'Il Signore degli Anelli', img: 'link1.jpg', category: 'fantasy', price: 20 },
  { asin: '002', title: '1984', img: 'link2.jpg', category: 'scifi', price: 15 },
  { asin: '003', title: 'Il Piccolo Principe', img: 'link3.jpg', category: 'kids', price: 10 }
]

describe('Test di AllTheBooks', () => {
  test('verifica quante Book Card vengono visualizzate', () => {
    render(
      <BrowserRouter>
        <ThemeContext.Provider value={{ isDarkMode: false }}>
          <BookContext.Provider
            value={{
              filteredBooks: mockBooks,
              searchQuery: '',
              isLoading: false,
              error: null
            }}
          >
            <AllTheBooks />
          </BookContext.Provider>
        </ThemeContext.Provider>
      </BrowserRouter>
    )

    // Trova tutte le immagini delle card dei libri
    const bookImages = screen.getAllByRole('img')

    // Verifica che il numero di immagini/carte corrisponda alla lunghezza dell'array
    expect(bookImages.length).toBe(mockBooks.length)
  })
})