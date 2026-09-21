import { useContext, useEffect, useState } from "react"
import { Alert, Button, Spinner } from "react-bootstrap"
import AddComment from "../addcomment/AddComment"
import CommentList from "../commentList/CommentList"
import EditComment from "../editComment/EditComment"
import { ThemeContext } from "../../../contexts/ThemeContext"
import { CommentsContext } from "../../../contexts/CommentsContext"

const CommentArea = ({ asin }) => {
    const {
        isLoading,
        error,
        getComments,
        token
    } = useContext(CommentsContext)

    const { isDarkMode } = useContext(ThemeContext)
    const theme = isDarkMode
        ? "bg-dark text-light border-secondary"
        : "bg-light text-dark"

    // Gestione stato per aggiunta e modifica commenti
    const [isAddingComment, setIsAddingComment] = useState(false)
    const [commentToEdit, setCommentToEdit] = useState(null)

    // Recupero commenti quando cambia l'asin del libro selezionato
    useEffect(() => {
        if (asin) {
            getComments(asin)
            setIsAddingComment(false)
            setCommentToEdit(null)
        }
    }, [asin])
    // Gestione eventi per aggiunta e modifica commenti
    const handleEdit = (comment) => {
        setCommentToEdit(comment)
    }
    // Gestione eventi per aggiunta e modifica commenti
    const handleCommentAdded = () => {
        setIsAddingComment(false)
        getComments(asin)
    }
    // Gestione eventi per aggiunta e modifica commenti
    const handleCommentEdited = () => {
        setCommentToEdit(null)
        getComments(asin)
    }
    // Gestione evento per tornare alla lista dei commenti
    const handleBackToComments = () => {
        setIsAddingComment(false)
        setCommentToEdit(null)
    }
    // Se non è selezionato alcun libro, mostra questo Alert
    if (!asin) {
        return (
            <Alert variant="info" className="mt-3">
                Seleziona un libro per vederne e gestirne le recensioni.
            </Alert>
        )
    }

    return (

        <div className={`p-3 border rounded shadow-sm w-100 overflow-hidden ${theme}`}>
            <h3 className={`mb-3 ${isDarkMode ? "text-light" : "text-dark"}`}>
                Recensioni
            </h3>

            {commentToEdit ? (
                <EditComment
                    comment={commentToEdit}
                    token={token}
                    onCommentEdited={handleCommentEdited}
                />
            ) : isAddingComment ? (
                <AddComment
                    asin={asin}
                    token={token}
                    onCommentAdded={handleCommentAdded}
                />
            ) : (
                <>
                    {isLoading && (
                        <div className="text-center my-3">
                            <Spinner animation="border" />
                        </div>
                    )}

                    {error && (
                        <Alert variant="danger">
                            {error}
                        </Alert>
                    )}

                    {!isLoading && !error && (
                        <div className="commentsListContainer">
                            <CommentList
                                onEdit={handleEdit}
                                getComments={() => getComments(asin)}
                            />
                        </div>
                    )}
                </>
            )}

            <div className="mt-3">
                {!isAddingComment && !commentToEdit && (
                    <Button
                        variant="success"
                        onClick={() => setIsAddingComment(true)}
                        className="w-100"
                    >
                        Aggiungi commento
                    </Button>
                )}

                {(isAddingComment || commentToEdit) && (
                    <Button
                        variant="secondary"
                        onClick={handleBackToComments}
                        className="w-100"
                    >
                        Torna ai commenti
                    </Button>
                )}
            </div>
        </div>
    )
}

export default CommentArea