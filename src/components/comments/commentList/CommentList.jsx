import SingleComment from "../singleComment/SingleComment"
import { useContext } from "react"
import { CommentsContext } from "../../../contexts/CommentsContext"

const CommentList = ({ onEdit, getComments }) => {
    const { comments, token } = useContext(CommentsContext)

    return (
        <div>
            {comments.length === 0 ? (
                <p className="text-center text-muted">
                    Non ci sono ancora recensioni per questo libro.
                </p>
            ) : (
                comments.map((singleCommentObj) => (
                    <SingleComment
                        key={singleCommentObj._id}
                        comment={singleCommentObj}
                        token={token}
                        getComments={getComments}
                        onEdit={onEdit}
                    />
                ))
            )}
        </div>
    )
}

export default CommentList