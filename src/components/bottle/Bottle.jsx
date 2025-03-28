import React from "react";
import "./bottle.css";

const Bottle = ({ bottle, handleAddToCart }) => {

  const { img, name, price, ratings, ratingsCount, seller, shipping, stock } =
    bottle;
  return (
    <div className="card bottle">
      <img src={img} alt="bottle image" />
      <h3>{name}</h3>
      <div className="title-div">
       
        <div>
          <h6>Price: ${price}</h6>
          <h6>{stock} Remaining</h6>
        </div>
        <div>
          <h6>Ratings: {ratings} <i class="fa-regular fa-star"></i></h6>
          <h6>RatingCount: {ratingsCount}</h6>
        </div>
        <div>
          <h6>Seller: {seller}</h6>
          <h6>Shipping: {shipping}</h6>
        </div>
      </div>
      <button onClick={()=>handleAddToCart(bottle)}>Buy Now</button>
    </div>
  );
};

export default Bottle;
