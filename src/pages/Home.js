import React, { useState } from "react";
import Products from "../components/Products/ProductItem";
import Basket from "../components/Basket/Basket";
import Offers from "../components/Offers/Offfers";
import { Container } from "react-bootstrap";

import breadImage from "../components/Images/bread.jpg";
import milkImage from "../components/Images/milk.jpg";
import cheeseImage from "../components/Images/cheese.jpg";
import soupImage from "../components/Images/soup.jpg";
import butterImage from "../components/Images/butter.jpg";

const Home = () => {
  const [products] = useState([
    { id: 1, name: "Bread", price: 1.1, image: breadImage },
    { id: 2, name: "Milk", price: 0.5, image: milkImage },
    { id: 3, name: "Cheese", price: 0.9, image: cheeseImage },
    { id: 4, name: "Soup", price: 0.6, image: soupImage },
    { id: 5, name: "Butter", price: 1.2, image: butterImage },
  ]);

  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find((item) => item.id === product.id);
      if (existingItem) {
        return prevCart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        return [...prevCart, { ...product, quantity: 1 }];
      }
    });
  };

  const adjustQuantity = (productId, delta) => {
    setCart((prevCart) =>
      prevCart
        .map((item) =>
          item.id === productId
            ? { ...item, quantity: item.quantity + delta }
            : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  const calculateSavings = () => {
    let savings = 0;

    const cheese = cart.find((item) => item.name === "Cheese");
    if (cheese) {
      savings += Math.floor(cheese.quantity / 2) * cheese.price;
    }

    const soup = cart.find((item) => item.name === "Soup");
    const bread = cart.find((item) => item.name === "Bread");
    if (soup && bread) {
      const applicableDiscounts = Math.min(soup.quantity, bread.quantity);
      savings += applicableDiscounts * (bread.price / 2);
    }

    return savings;
  };

  const subTotal = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );
  const totalSavings = calculateSavings();
  const totalAmount = subTotal - totalSavings;

  return (
    <Container>
      <Products products={products} addToCart={addToCart} />
      <Basket
        cart={cart}
        adjustQuantity={adjustQuantity}
        subTotal={subTotal}
        totalSavings={totalSavings}
        totalAmount={totalAmount}
      />
      <Offers />
    </Container>
  );
};

export default Home;
