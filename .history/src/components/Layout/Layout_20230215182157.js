import React, { useState } from "react";
import Compelete from "../Add/Compelete";
import Button from "../Button/Button";
import Card1 from "../Cards/Card1";
import Card2 from "../Cards/Card2";
import style from "./layout.css";
import  App from  './'

function Layout() {
  const [cardHolderName, setCardHolderName] = useState("");
  const [cardNumber, setCardNumber] = useState("");
  const [expMonth, setExpMonth] = useState("");
  const [expYear, setExpYear] = useState("");
  const [cvc, setCvc] = useState("");
  const[isClicked,setIsClicked] =useState(<App/>)

  const handleConfirm =()=>{
    setIsClicked(<Compelete/>)
  }
  const handleInputChange = (e) => {
    setCardNumber(e.target.value);
  };
  const handleCardHolderName = (e) => {
    setCardHolderName(e.target.value);
  };
  const handleExpMonth = (e) => {
    setExpMonth(e.target.value);
  };
  const handleExpYear = (e) => {
    setExpYear(e.target.value);
  };
  const handleCvc = (e) => {
    setCvc(e.target.value);
  };
  return (
    <>
    {isClicked &&
      <div class="layout">
        <div class="partitions">
          <div class="partition1">
            <div class="card1">
              <Card1
                cardNumber={cardNumber}
                cardHolderName={cardHolderName}
                expMonth={expMonth}
                expYear={expYear}
              />
            </div>
            <div class="card2">
              <Card2 cvc={cvc} />
            </div>
          </div>

          <div class="partition2">
            
            <form action="" className="Form">
              <label for="Username">CARD HOLDER NAME</label> <br />
              <input
                value={cardHolderName}
                onChange={handleCardHolderName}
                className="card_holder"
                type="text"
                id="username"
                name="username"
                placeholder=" e.g Abhishek Kumar"
              
              />
              <br />
              <label for="number">CARD NUMBER</label> <br />
              <input
                value={cardNumber}
                onChange={handleInputChange}
                className="card_number"
                pattern="[0-9]{4}-[0-9]{4}-[0-9]{4}"
                type="text"
                id="number"
                name="number"
                placeholder=" e.g 1234 5678 9123 0000"
              
              />{" "}
              <br />
              <div className="exp_date">
                <label for="number">EXP. DATE (MM/YY)</label>
                <label for="number" className="cvc">
                  CVC
                </label>
                <div className="exp_date_input">
                  <input
                    value={expMonth}
                    onChange={handleExpMonth}
                    type="text"
                    id="number"
                    name="number"
                    placeholder="  MM"
                  
                    className="number"
                  />
                  <input
                    value={expYear}
                    onChange={handleExpYear}
                    type="text"
                    id="number"
                    name="number"
                    placeholder="  YY"
                    
                    className="number"
                  />
                  <input
                    value={cvc}
                    onChange={handleCvc}
                    type="text"
                    id="cvc"
                    name="number"
                    placeholder="  e.g 123"
                  
                    className="number"
                  />
                </div>
                 <Button onClick ={handleConfirm}/>
              </div>
            </form>
            
          </div>
        </div>
      </div>
    
    }
    </>
  );
}

export default Layout;
