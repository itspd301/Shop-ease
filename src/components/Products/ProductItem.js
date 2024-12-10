import React from "react";
import { Button, Card, Col, Row, Container } from "react-bootstrap";
import "./Productt.css"; 

const ProductItem = ({ product, addToCart }) => {
  return (
    <Container>
      <Card className="product-card h-100 shadow-sm my-1 pt-2 align-items-center">
        <Card.Img
          variant="top"
          src={product.image}
          alt={product.name}
          className="product-image"
          style={{
            objectFit: "cover",
            height: "350px",
            width: "350px",
          }}
        />
        <Card.Body>
          <Card.Title>{product.name}</Card.Title>
          <Card.Text>$ {product.price.toFixed(2)}</Card.Text>
          <Button
            variant="primary"
            onClick={() => addToCart(product)}
            className="animate-button"
          >
            Add to Cart
          </Button>
        </Card.Body>
      </Card>
    </Container>
  );
};

const Products = ({ products, addToCart }) => {
  return (
    <Container>
      <h2 className="my-4 text-center">Our Products</h2>
      <Row>
        {products.map((product) => (
          <Col lg={4} key={product.id}>
            <ProductItem product={product} addToCart={addToCart} />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Products;
