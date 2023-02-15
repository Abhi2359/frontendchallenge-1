import React from "react";
import style from "./Card2.css";

function Card2({cvc}) {
  return (
    <>
      <div className="card2">
        
        <div class="_card__number2">
       
          <input type="text" value={cvc} readOnly className="card2_input" placeholder="000" />
        </div>
      </div>
    </>
  );
}

export default Card2;
