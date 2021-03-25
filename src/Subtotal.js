import React from "react";
import "./Subtotal.css";
function Subtotal({ subtotal }) {
  return (
    <div className="subtotal">
      <table className="subtotaltable">
        <tr>
          <th colSpan="2"> Cart Total</th>
        </tr>
        <tr>
          <td>Subtotal</td>
          <td>$ {subtotal}</td>
        </tr>
        <tr>
          <td>Total</td>
          <td>$ {subtotal}</td>
        </tr>
      </table>
      <button onClick={(_e) => console.log("procced to chekout clicked")}>
        PROCEED TO CHECKOUT
      </button>
    </div>
  );
}

export default Subtotal;
