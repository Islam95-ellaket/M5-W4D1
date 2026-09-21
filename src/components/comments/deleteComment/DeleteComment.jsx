import { MessageSquareX } from "lucide-react"

const DeleteComment = ({
    commentId,
    token,
    getComments
}) => {

    const handleDelete = async () => {

        try {

            const response = await fetch(
                `https://striveschool-api.herokuapp.com/api/comments/${commentId}`,
                {
                    method: "DELETE",
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                }
            )

            if (!response.ok) {
                throw new Error(`Errore ${response.status}`)
            }

            await getComments()

        } catch (error) {

            console.error(error)

        }
    }


    return (

        <button
            className="btn border-0 p-0"
            type="button"
            onClick={handleDelete}
        >

            <MessageSquareX
                width={32}
                height={32}
                color="white"
                fill="red"
                style={{ cursor: "pointer" }}
            />

        </button>
    )
}

export default DeleteComment
