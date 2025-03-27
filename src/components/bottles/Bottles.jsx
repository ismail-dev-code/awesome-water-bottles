import React, { use } from "react";
import Bottle from "../bottle/bottle";
import './bottles.css'

const Bottles = ({ bottlesPromise }) => {
  const bottles = use(bottlesPromise);

  return <div>

    <h3>Bottles: {bottles.length}</h3>
    <div className="bottles-container">
    {
      bottles.map(bottle=> <Bottle key={bottle.id} bottle={bottle}></Bottle>)
    }
    </div>
  </div>;
};

export default Bottles;
