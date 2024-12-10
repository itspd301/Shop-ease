import React from "react";
import { Row, Col, Button } from "react-bootstrap";

const BasketItem = ({ item, adjustQuantity }) => {
  return (
    <Row className="basket-item my-3 align-items-centerd-flex justify-content-center">

      <Col xs={4} className="text-start">
        <span>{item.name}</span>
      </Col>

      <Col xs={4} className="text-start d-flex align-items-center">

        <Button
          variant="outline-secondary"
          size="sm"
          onClick={() => adjustQuantity(item.id, -1)}
          className="me-2"
        >
          -
        </Button>
        <span className="mx-2">{item.quantity}</span>
        <Button
          variant="outline-secondary"
          size="sm"
          onClick={() => adjustQuantity(item.id, 1)}
          className="ms-2"
        >
          +
        </Button>

        <span className="ms-3">
          $ {(item.price * item.quantity).toFixed(2)}
        </span>
      </Col>
    </Row>
  );
};

export default BasketItem;
