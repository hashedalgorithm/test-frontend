import React, { useState } from "react";
import "./Cartcard";

function Cartitemcard({
  product,
  price,
  quantity: propQuantity,
  changeSubTotal,
}) {
  const [quantity, setQuantity] = useState(propQuantity);

  const addButtonHandler = (e) => {
    e.preventDefault();
    changeSubTotal(price);
    setQuantity(quantity + 1);
  };

  const removeButtonHandler = (e) => {
    e.preventDefault();
    if (quantity > 0) {
      changeSubTotal(0 - price);
      setQuantity(quantity - 1);
    }
  };

  return (
    <>
      <tr>
        <td>
          <i className="fas fa-times"></i>
        </td>
        <td>
          <div className="box"></div>
        </td>
        <td>{product}</td>
        <td style={{ color: "#00ff00" }}>$ {price}</td>
        <td>
          <div className="quantitybox">
            <div onClick={removeButtonHandler} className="QB_box">
              -
            </div>
            <div id="quantity" className="QB_box">
              {quantity}
            </div>
            <div onClick={addButtonHandler} className="QB_box">
              +
            </div>
          </div>
        </td>
        <td style={{ color: "#00ff00" }}>$ {price * quantity}</td>
      </tr>
    </>
  );
}

export default Cartitemcard;
