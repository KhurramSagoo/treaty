import React from "react";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";
import Row from "react-bootstrap/Row";

/* import bootstrap to set changes */
// import '~bootstrap/scss/bootstrap';

function Header(props) {
  return (
    <Container className=" rounded-circle d-flex flex-md-row justify-content-center container-fluid align-items-center">
      <Row md={12} className="flex-wrap flex-row container-fluid">
        <Col xs={4} sm={6} md={12} className="mb-4 flex-row">
          <Card style={{ width: "20rem" }} className="border-0 flex-row">
            <Card.Body className="d-flex flex-column align-items-center  ">
              <Image src={props.img} style={{ width: 50 }} />
              <div className="mt-2">
                <Card.Title>{props.title}</Card.Title>
                <Card.Text>{props.detail}</Card.Text>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default Header;
