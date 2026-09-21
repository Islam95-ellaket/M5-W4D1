import { Spinner } from "react-bootstrap"

const Loadingindicator = () => {
  return (
    <div className="d-flex gap-3 justify-content-center align-items-center py-5 ">
      <span className="fs-4 fw-bolder">Loading...</span>
      <Spinner animation="grow" variant="primary" />
      <Spinner animation="grow" variant="primary" />
      <Spinner animation="grow" variant="primary" />
    </div>
  )
}

export default Loadingindicator
