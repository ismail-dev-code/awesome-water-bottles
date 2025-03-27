import React from "react";
import './bottle.css'

const Bottle = ({ bottle }) => {
  console.log(bottle);
  const {
    img,
    name,
    price,
    quantity,
    ratings,
    ratingsCount,
    seller,
    shipping,
    stock,
  } = bottle;
  return (
    <div className="card">
      <img src={img} alt="bottle image" />
      <h3>Name: {name}</h3>
      <h4>Price: {price}</h4>
      <h5>Quantity: {quantity}</h5>
      <h6>Ratings: {ratings}</h6>
      <h6>RatingCount: {ratingsCount}</h6>
      <h6>Seller: {seller}</h6>
      <h6>Shipping: {shipping}</h6>
      <h6>Stock: {stock}</h6>
    </div>
  );
};

export default Bottle;
