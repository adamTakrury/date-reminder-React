import React from 'react'
import { Col, Row } from "react-bootstrap";

const Date = ({data}) => {
  return (
    <div>
      <Row className="justify-content-center">
          <Col sm="8">
            {data.length ? (
              data.map((item) => {
                return (
                  <div>
                    <div key={item.id} className="rectangle">
                      <img
                        className="profile-image"
                        src="profile.png"
                        alt="User Profile"
                      />
                      <div className="text-container">
                        <p>{item.name}</p>
                        <p>on {item.time}</p>
                      </div>
                    </div>
                    <hr className="hr-divider" />
                  </div>
                );
              })
            ) : (
              <h2>There is no appointments today</h2>
            )}
          </Col>
        </Row>
    </div>
  )
}

export default Date
