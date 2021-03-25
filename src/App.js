import React, { useState } from "react";
// import { Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Cartcard from "./Cartcard";
import Subtotal from "./Subtotal";
import Caritems from "./Cartitems";

function App() {
  const [subtotal, setSubtotal] = useState(() => {
    let total = 0;
    Caritems.forEach((item) => {
      total = total + item.quantity * item.price;
      console.log(total);
    });
    return total;
  });

  const changeSubTotal = (arg) => {
    setSubtotal(subtotal + arg);
  };

  const applyCoupon = (arg) => {
    if (arg === "123456") {
      setSubtotal(() => subtotal - subtotal * 0.1);
      return true;
    }
  };

  return (
    <>
      <div className="head">
        <p>Templace</p>
      </div>
      <div className="navbar">
        <div>
          <h2>Cart</h2>
        </div>
        <div>
          <i className="fas fa-home"></i> Cart
        </div>
      </div>
      <div className="cartcontainer">
        <div className="CC-s1">
          <Cartcard changeSubTotal={changeSubTotal} applyCoupon={applyCoupon} />
        </div>
        <div className="CC-s2">
          <Subtotal subtotal={subtotal} />
        </div>
      </div>
    </>
  );
}

export default App;
