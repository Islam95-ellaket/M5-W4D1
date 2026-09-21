import Alert from 'react-bootstrap/Alert'
import { LibraryBig } from 'lucide-react'


const Welcome = () => {
    return (
        <Alert className='d-flex justify-content-center fs-3 m-0' variant={'secondary'}>
            <p className=' d-flex flex-column flex-wrap pt-3'>
                BENVENUTI SUL SITO 
                <span className='d-flex align-items-center justify-content-center fs-4 text-dark fw-bolder gap-2' >
                    <LibraryBig
                        color='black'
                        fill="red"
                        size={40}
                    />
                    EpiBooks
                    <LibraryBig
                        color='black'
                        fill="red"
                        size={40}
                    />
                </span>
            </p>
        </Alert>
    )
}

export default Welcome