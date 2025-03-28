import React, { use, useState } from "react";
import Bottle from "../bottle/bottle";
import "./bottles.css";
import { addToStoredCart } from "../../utilities/localStorage";

const Bottles = ({ bottlesPromise }) => {
  const [cart, setCart] = useState([]);

  const bottles = use(bottlesPromise);
  const handleAddToCart = (bottle) => {
    const newCart = [...cart, bottle];
    setCart(newCart);
    // save the bottle id in the storage 
    addToStoredCart(bottle.id);
  };

  return (
    <div>
      <h3>Bottles: {bottles.length}</h3>
      <p>Added to Cart: {cart.length}</p>
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
