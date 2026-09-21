import { Alert } from "react-bootstrap"
import { BookX } from "lucide-react"

const AlertBooks = ({ variant, title, message }) => {
    return (
        <Alert className="d-flex justify-content-center align-items-center gap-2" variant={variant}>
            <Alert.Heading>
                {title}
            </Alert.Heading>
            <p className="m-0">
                {message}
            </p>

            <BookX
                width={40}
                height={35}
                color='red'
            />

        </Alert>
    )
}

export default AlertBooks
