import React from "react";
import { Col, Row } from "react-bootstrap";
const CountDate = ({ data }) => {
  return (
    <div>
      <Row className="justify-content-center">
        <Col sm="8">You have {data.length} appointments today</Col>
      </Row>
    </div>
  );
};

export default CountDate;
