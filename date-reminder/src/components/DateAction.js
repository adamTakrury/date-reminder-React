import React from 'react'
import { Button, Col, Row } from "react-bootstrap";
const DateActions = ({clickDelete,clickShow}) => {
  return (
    <div>
      <Row className="justify-content-center my-2">
          <Col sm="8" className="d-flex justify-content-between">
            <Button onClick={clickDelete} className="btn-style p-2" >Clear All</Button>
            <Button onClick={clickShow} className="btn-style p-2">Show Data</Button>
          </Col>
        </Row>
    </div>
  )
}

export default DateActions
