import React, { useEffect, useState } from "react";
import { db } from "../service/firebase";
import "../styles/common.css";

function Resource() {
  const [stats,setStats]=useState([])
  const fetchStats=async()=>{
    const response=db.collection('crop_data');
		const data=await response.get();
		
    data.docs.forEach(item=>{
			setStats([...stats,item.data()])
			const results = JSON.stringify(stats);
			console.log(results);
    })
  }
  useEffect(() => {
    fetchStats();
  }, [])

  return(
    <main className="pages-container">
      <h2 style={{color: 'grey', padding: '20px'}}>Plant Resources</h2>
      { stats.map(stat=>{
        return(
          <div className="row" style={{padding: '20px'}}>
            <div className="col-sm-8" style={{margin: 'auto'}}>
              <div className="card" style={{textAlign: 'center', height: '100px'}}>{stat.stats_disease_resource_1}</div>
            </div>
          </div>
        )})}
    </main>
  )
}
export default Resource;