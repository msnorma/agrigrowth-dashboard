import React from 'react';
import "../styles/common.css";
import "../styles/order.css";
import boxImage from "../images/Box2.png";

function Order() {

  // const handleForm = () => {

  // }

  return(
    <main className="pages-container">
      <div className="row" style={{padding: '20px'}}>
      <h2 style={{color: 'grey'}}>Track Orders</h2>
        <div className="col-sm-12">
          <div className="image-container">
            <img src={boxImage} alt="plant" style={{width: '500px', height: '450px'}}/>
            <p className="sub-heading-grey" style={{padding: '10px 200px'}}>
              Your order has been delivered, check manual to set up device and with a click of a button your device will be connect!
            </p>
          </div>
          <div style={{textAlign: 'center'}}>
            <button className="button-submit" type="submit" >Create order</button>
            {/* <button className="button-submit" type="submit" onClick={}>Create order</button> */}
          </div>
        </div>
      </div>
    </main>
  )
}
export default Order;