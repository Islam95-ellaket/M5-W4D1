import MyFooter from "../components/layout/footer/MyFooter"
import MyNav from "../components/layout/navbar/MyNav"

const BaseLayout = ({ children }) => {

    return (
        <>
            <MyNav />

            {children}

            <MyFooter />
        </>
    )
}

export default BaseLayout
