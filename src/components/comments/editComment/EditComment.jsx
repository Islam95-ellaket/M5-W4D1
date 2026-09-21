import { useState } from "react"
import { Form, Button, Alert } from "react-bootstrap"

const EditComment = ({
    comment,
    token,
    onCommentEdited
}) => {

    const [formData, setFormData] = useState({
        comment: comment.comment,
        rate: comment.rate,
        elementId: comment.elementId
    })

    const [error, setError] = useState("")


    const handleChange = (e) => {

        const { name, value } = e.target

        setFormData({
            ...formData,
            [name]: value
        })
    }


    const handleSubmit = async (e) => {

        e.preventDefault()

        setError("")

        try {

            const response = await fetch(
                `https://striveschool-api.herokuapp.com/api/comments/${comment._id}`,
                {
                    method: "PUT",
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: `Bearer ${token}`
                    },
                    body: JSON.stringify(formData)
                }
            )

            if (!response.ok) {
                throw new Error(`Errore ${response.status}`)
            }

            await response.json()

            onCommentEdited()

        } catch (error) {

            console.error(error)

            setError("Errore durante la modifica del commento")
        }
    }


    return (

        <Form onSubmit={handleSubmit}>

            {error && (
                <Alert variant="danger">
                    {error}
                </Alert>
            )}


            <Form.Group className="mb-3">

                <Form.Label>
                    Commento
                </Form.Label>

                <Form.Control
                    name="comment"
                    value={formData.comment}
                    onChange={handleChange}
                    required
                />

            </Form.Group>


            <Form.Group className="mb-3">

                <Form.Label>
                    Valutazione
                </Form.Label>

                <Form.Control
                    type="number"
                    min="1"
                    max="5"
                    name="rate"
                    value={formData.rate}
                    onChange={handleChange}
                    required
                />

            </Form.Group>


            <Button
                variant="success"
                type="submit"
            >
                Salva modifiche
            </Button>

        </Form>
    )
}

export default EditComment
