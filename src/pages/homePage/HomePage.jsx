import AllTheBooks  from "../../components/books/allTheBooks/AllTheBooks"
import Welcome from "../../components/welcome/Welcome"
import BaseLayout from "../../layouts/BaseLayout"

const HomePage = () => {
    return (
        <BaseLayout>

            <Welcome />

            <AllTheBooks />

        </BaseLayout>
    )
}

export default HomePage
