import { useState } from 'react'
import { Form, Button } from 'react-bootstrap'

const AddComment = ({ asin, token, onCommentAdded }) => {
  const [commentText, setCommentText] = useState('')
  const [rate, setRate] = useState('1')

  const handleSubmit = async (e) => {
    e.preventDefault()

    const newComment = {
      comment: commentText,
      rate: rate,
      elementId: asin 
    }

    try {
      const res = await fetch('https://striveschool-api.herokuapp.com/api/comments/', {
        method: 'POST',
        headers: {
          'Content-type': 'application/json',
          Authorization: `Bearer ${token}`
        },
        body: JSON.stringify(newComment)
      })

      if (res.ok) {
        setCommentText('')
        setRate('1')
        onCommentAdded()
      } else {
        alert('Errore durante il salvataggio del commento')
      }
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3">
        <Form.Label>Testo del commento</Form.Label>
        <Form.Control
          type="text"
          placeholder="Inserisci una recensione..."
          value={commentText}
          onChange={(e) => setCommentText(e.target.value)}
          required
        />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Valutazione (1-5)</Form.Label>
        <Form.Select
          value={rate}
          onChange={(e) => setRate(e.target.value)}
        >
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
        </Form.Select>
      </Form.Group>

      <Button variant="primary" type="submit">
        Invia Commento
      </Button>
    </Form>
  )
}

export default AddComment