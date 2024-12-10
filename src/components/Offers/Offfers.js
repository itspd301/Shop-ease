import React from "react";
import { Card, ListGroup } from "react-bootstrap";
import "./Offers.css";

const Offers = () => {
  return (
    <Card className="offers">
      <Card.Body>
        <Card.Title className="text-center text-primary mb-4">Special Offers</Card.Title>
        <Card.Text className="fw-bold">Offer Details:</Card.Text>
        <ListGroup variant="flush">
          <ListGroup.Item>
            <strong>Cheese:</strong> Buy one, get a second Cheese free!
          </ListGroup.Item>
          <ListGroup.Item>
            <strong>Soup:</strong> Buy one Soup, get Bread at half price!
          </ListGroup.Item>
        </ListGroup>
      </Card.Body>
    </Card>
  );
};

export default Offers;
