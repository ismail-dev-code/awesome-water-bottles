import React, { use, useEffect, useState } from "react";
import Bottle from "../bottle/bottle";
import "./bottles.css";
import { addToStoredCart, getStoreCart, removeFromCart } from "../../utilities/localStorage";
import Cart from "../cart/Cart";

const Bottles = ({ bottlesPromise }) => {
  const [cart, setCart] = useState([]);

  const bottles = use(bottlesPromise);

  // use effect
  useEffect(() => {
    const storedCartIds = getStoreCart();
    // console.log(storedCartIds);
    const storedCart = [];
    for (const id of storedCartIds) {
      const cartBottle = bottles.find((bottle) => bottle.id === id);
      if (cartBottle) {
        storedCart.push(cartBottle);
      }
    }
    setCart(storedCart);
  }, [bottles]);

  const handleAddToCart = (bottle) => {
    const newCart = [...cart, bottle];
    setCart(newCart);
    // save the bottle id in the storage
    addToStoredCart(bottle.id);
  };

  const handleRemoveFromCart = (id) => {
    console.log("remove item form cart", id);
    const remainingCart = cart.filter((bottle) => bottle.id !== id);
    setCart(remainingCart);
    removeFromCart(id);
  };

  return (
    <div>
      <h3>Bottles: {bottles.length}</h3>
      <p>Added to Cart: {cart.length}</p>
      <Cart cart={cart} handleRemoveFromCart={handleRemoveFromCart}></Cart>
      <div className="bottles-container">
        {bottles.map((bottle) => (
          <Bottle
            handleAddToCart={handleAddToCart}
            key={bottle.id}
            bottle={bottle}
          ></Bottle>
        ))}
      </div>
    </div>
  );
};

export default Bottles;
