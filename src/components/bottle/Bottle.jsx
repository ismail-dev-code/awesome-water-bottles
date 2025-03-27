import React from "react";
import './bottle.css'

const Bottle = ({ bottle }) => {
  console.log(bottle);
  const {
    img,
    name,
    price,
    ratings,
    ratingsCount,
    seller,
    shipping,
    stock,
  } = bottle;
  return (
    <div className="card bottle">
      <img src={img} alt="bottle image" />
      <h3>{name}</h3>
     <div className="title-div"> <div><h6>Price: {price}</h6>
      <h6>Stock: {stock}</h6></div>
      <div><h6>Ratings: {ratings}</h6>
      <h6>RatingCount: {ratingsCount}</h6></div>
      <div><h6>Seller: {seller}</h6>
      <h6>Shipping: {shipping}</h6></div>
      </div>
    </div>
  );
};

export default Bottle;
