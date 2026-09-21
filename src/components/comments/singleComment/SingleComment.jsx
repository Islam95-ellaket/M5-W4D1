
import { useContext } from "react"
import { MessageSquareDiff } from "lucide-react"
import DeleteComment from "../deleteComment/DeleteComment"
import { ThemeContext } from "../../../contexts/ThemeContext"

const SingleComment = ({
    comment,
    token,
    getComments,
    onEdit
}) => {

    const { isDarkMode } = useContext(ThemeContext)

    const theme = isDarkMode
        ? "bg-dark text-light border-secondary"
        : "bg-light text-dark"

    return (
        <div className={`border rounded p-2 mb-2 w-100 ${theme}`}>
            <div className="d-flex justify-content-between align-items-start gap-2">

                <div style={{ minWidth: 0, flex: 1 }}>
                    <div className="d-flex flex-wrap align-items-center gap-1">
                        <strong className="me-1">
                            Voto: {comment.rate}/5
                        </strong>

                        {comment.author && (
                            <small className={isDarkMode ? "text-light" : "text-secondary"}>
                                ({comment.author})
                            </small>
                        )}
                    </div>

                    <div className="mt-1 text-break">
                        {comment.comment}
                    </div>
                </div>

                <div className="d-flex flex-column align-items-center gap-2">
                    <MessageSquareDiff
                        width={32}
                        height={32}
                        color="white"
                        fill="blue"
                        style={{ cursor: "pointer" }}
                        onClick={() => onEdit(comment)}
                    />

                    <DeleteComment
                        commentId={comment._id}
                        token={token}
                        getComments={getComments}
                    />
                </div>

            </div>
        </div>
    )
}

export default SingleComment