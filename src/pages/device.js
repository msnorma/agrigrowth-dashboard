import React, { useEffect, useState } from "react";
import {toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { db } from "../service/firebase";
import plantImage from "../images/plant.png";
import "../styles/common.css";
import "../styles/device.css";

toast.configure()

function Device() {

  const [stats,setStats]=useState([]);
  const [formData, setFormData]=useState("");
  const [isLoading, setIsLoading]=useState(false);


  useEffect(() => {
    fetchStats();
  }, []);
  
  const fetchStats = async() => {
    const response = db.collection('crop_data');
		const data = await response.get();
		setIsLoading(true);
    data.docs.forEach(item=>{
			setStats([...stats,item.data()])
    })
  }

  const saveDeviceName = e => {
    e.preventDefault()
    fetch('https://camssecure.co.za:2502/api/v1/change/devicename', {
      method: 'POST',
      body: JSON.stringify({ "dev_name" : formData }),
      headers: { 
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
       },
    })
      .then(res => res.json())
      .then(data => setFormData(data.formData))
      .catch(error => {
        console.error("There was an unexpected error: " + error);
      })
      notify();
  }

  const notify = ()=>{
    toast.success('Device name change, will update after 2 minutes', {autoClose:3000})
  }

  return(
    <main className="pages-container">
      <div className="row" style={{padding: '20px'}}>
      <h2 style={{color: 'grey'}}>Connected Devices</h2>
      <div className="col-sm-6">
          <div className="card" style={{height: '400px'}}>
            <div className="image-container">
              <img src={plantImage} alt="plant" style={{width: '40%'}}/>
            </div>
            <form onSubmit={saveDeviceName}>
              <div style={{marginTop: '50px'}}>
                <input 
                  className="form-control"
                  name="name"
                  type="text"
                  placeholder="Enter new device name"
                  value={formData}
                  onChange={e => setFormData(e.target.value)}
                />
              </div>
              <div style={{textAlign: 'center'}}>
                <button className="button-submit" type="submit" disabled={!formData}>Submit</button>
              </div>
            </form>
          </div>
        </div>
        <div className="col-sm-4">
        { isLoading && stats.map(stat=>{
							return(
                    <div className="row">
                      <div className="card" style={{height: '100px', fontWeight: '600' }}>
                        {stat.dev_name}
                        <small style={{fontWeight: '400'}}>Connected device - status active</small>
                      </div>
                    </div>
              )
        })}
        </div>
      </div>
    </main>
  )
}
export default Device;