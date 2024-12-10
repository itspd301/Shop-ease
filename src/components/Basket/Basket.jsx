import React from "react";
import { Container, Row, Col, Button, Card } from "react-bootstrap";
import BasketItem from "./BasketItem";
import "./Basket.css";

const Basket = ({
  cart,
  adjustQuantity,
  subTotal,
  totalSavings,
  totalAmount,
}) => {
  return (
    <Container className="basket py-4">
      <Row>
        <Col>
          <h2 className="text-center text-primary mb-4">Your Basket</h2>
          {cart.length === 0 ? (
            <Card className="text-center py-5 shadow-sm">
              <Card.Body>
                <Card.Text className="text-muted">
                  Your basket is empty. Add some items!
                </Card.Text>
              </Card.Body>
            </Card>
          ) : (
            <div className="basket-items">
              {cart.map((item) => (
                <BasketItem
                  key={item.id}
                  item={item}
                  adjustQuantity={adjustQuantity}
                />
              ))}
            </div>
          )}
        </Col>
      </Row>

      {cart.length > 0 && (
        <>
          <Row className="summary mt-4 py-3 px-4 rounded shadow-sm bg-light">
            <Col xs={6} className="text-muted">Sub Total:</Col>
            <Col xs={6} className="text-end fw-bold">$ {subTotal.toFixed(2)}</Col>
          </Row>
          <Row className="summary py-3 px-4 rounded shadow-sm bg-light mt-2">
            <Col xs={6} className="text-muted">Savings:</Col>
            <Col xs={6} className="text-end fw-bold text-success">
              $ {totalSavings.toFixed(2)}
            </Col>
          </Row>
          <Row className="summary py-3 px-4 rounded shadow-sm bg-light mt-2">
            <Col xs={6} className="text-muted">Total Amount:</Col>
            <Col xs={6} className="text-end fw-bold text-primary">
              $ {totalAmount.toFixed(2)}
            </Col>
          </Row>

          <Row>
            <Col className="text-center mt-4">
              <Button variant="success" className="px-5 py-2 shadow-sm">
                Proceed to Checkout
              </Button>
            </Col>
          </Row>
        </>
      )}
    </Container>
  );
};

export default Basket;
