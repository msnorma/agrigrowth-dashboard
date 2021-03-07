import React, { useState } from 'react';
import {toast} from 'react-toastify';
import "../styles/common.css";
import "../styles/order.css";
import boxImage from "../images/Box2.png";

toast.configure()

function Order() {

  const [order,setOrder]=useState(false);
  const [value, setValue] = useState("");

  const handleOrder = () => {
    setOrder(true);
  }

  const handleForm = () => {
    setOrder(false);
    notify();
  }

  const notify = ()=>{
    toast.success('Your order is being processed', {autoClose:3000})
  }

  return(
    <main className="pages-container">
      { order === false ?(<div className="row" style={{padding: '20px'}}>
      <h2 style={{color: 'grey'}}>Track Orders</h2>
        <div className="col-sm-12">
          <div className="image-container">
            <img src={boxImage} alt="plant" style={{width: '500px', height: '450px'}}/>
            <p className="sub-heading-grey" style={{padding: '10px 200px'}}>
              Your order has been delivered, check manual to set up device and with a click of a button your device will be connect!
            </p>
          </div>
          <div style={{textAlign: 'center'}}>
            <button className="button-submit" type="submit" onClick={handleOrder}>Create order</button>
          </div>
        </div>
      </div>) :
      (<div className="row" style={{padding: '20px'}}>
        <h2 style={{color: 'grey'}}>Create Orders</h2>
        <div className="col-sm-12" style={{marginTop: '50px'}}>
          <div>
            <div className="card" style={{height: '200px', width: '400px'}}>
              <form style={{display: 'flex'}}>
                <input 
                  className="form-control form-control-sm" 
                  type="text"
                  placeholder="Insert device name"
                  style={{height: '20px'}}
                  value={value}
                  onChange={e => setValue(e.target.value)}
                />
                <select className="form-control form-control-sm" style={{width: '50px'}}>
                  <option>0</option>
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                </select>
              </form>
              <div style={{textAlign: 'center'}}>
                <button className="button-submit" type="submit" onClick={handleForm} style={{marginTop: '40px'}} disabled={value.length < 1}>Submit</button>
              </div>
            </div>
            </div>
        </div>
      </div>)}
    </main>
  )
}
export default Order;