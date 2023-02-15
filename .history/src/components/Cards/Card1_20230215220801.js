import React from "react";
import style from "./Card1.css";

function Card1({ cardNumber, cardHolderName, expMonth, expYear }) {
  return (
    <>
      <div className="card1">
        <div class="cardinput">
          <div class="_card__number">
            <input type="text" value={cardNumber} readOnly id="input" />
          </div>
          
          <div class="_card__details">
            <input type="text" value={cardHolderName} readOnly id="input" />
            <div class="expiry">
              <input type="text" value={expMonth} readOnly id="input" />
              <div class="slash">/</div>
              <input type="text" value={expYear} readOnly id="input"/>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Card1;
