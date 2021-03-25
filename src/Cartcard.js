import React, { useState } from "react";
import "./Cartcard.css";
import Cartitemcard from "./Cartitemcard";
import Cartitems from "./Cartitems";

function Cartcard({ changeSubTotal, applyCoupon }) {
  const [couponCode, setCouponCode] = useState("");
  const [applied, setApplied] = useState(false);

  const handleCouponCodeChange = (e) => {
    e.preventDefault();
    setCouponCode(e.target.value);
  };

  return (
    <div className="cartcard">
      <table>
        <tr>
          <th></th>
          <th></th>
          <th>PRODUCT</th>
          <th>PRICE</th>
          <th>QUANTITY</th>
          <th>TOTAL</th>
        </tr>
        {Cartitems.map((item, index) => {
          return (
            <Cartitemcard
              product={item.product}
              price={item.price}
              quantity={item.quantity}
              changeSubTotal={changeSubTotal}
            />
          );
        })}
      </table>
      <div className="couponbox">
        <div>
          <input
            id="coupon"
            type="text"
            placeholder="Coupon Code"
            value={couponCode}
            onChange={handleCouponCodeChange}
          />
          <button
            onClick={(_e) => {
              if (!applied) {
                setApplied(applyCoupon(couponCode));
              }
            }}
          >
            APPLY COUPON
          </button>
        </div>
        <div className="updatecart">
          <button onClick={(e) => console.log("updatecart clicked")}>
            UPDATE CART
          </button>
        </div>
      </div>
    </div>
  );
}

function checkcoupon(code) {
  code == "123456" ? console.log(code) : console.log("false");
}
function quantityadd(val) {
  val = val + 1;
  console.log(val);
  document.getElementById("quantity").value = val;
}
function quantitysub(val) {
  val = val - 1;
  console.log(val);
  document.getElementById("quantity").value = val;
}
export default Cartcard;
