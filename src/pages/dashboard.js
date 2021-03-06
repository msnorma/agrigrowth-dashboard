import React, { useEffect, useState } from "react";
import { db } from "../service/firebase";
import { Pie, Line } from "react-chartjs-2";
import "../styles/dashboard.css";
import "../styles/common.css";

function Dashboard() {

	const [stats,setStats]=useState([]);
	const [pieChart,setPieChart]=useState({});
	const [lineChart,setLineChart]=useState({});

	window.onload = function() {
		fetchStats()
	}

	const fetchStats=async()=>{
		var statistics = [];
		var pieData = [];
		var lineData = [];
		var newPieData = 0.0;
		var water = 0.0;
		var waterData = [];

		var plantStats = db.collection("/crop_data");

		plantStats.get().then((snapshot) => {
			snapshot.forEach(item => {
				setStats([...stats, item.data()]);
				var data = JSON.stringify(item.data());
				statistics.push(data);
				pieData.push(item.data().stats_soil_moisture);
				lineData.push(item.data().stats_temperature);
			})

			
			var totalWater = 100;
			newPieData = totalWater - pieData[0];
			water = totalWater - newPieData;

			waterData.push(parseInt(water));
			waterData.push(parseInt(newPieData));
			
		});

		setPieChart({
			labels: [
				'Water',
				'No Water',
			],
			datasets: [
				{
					label: 'Water Level',
					borderColor: '#F8ECE0',
					backgroundColor: [
						'#ACDDD2',
						'#FFF'
					],
					data: waterData
				}
			]
		});

		setLineChart({
			labels: [
				'2 minutes',
				'4 minutes',
				'6 minutes',
				'8 minutes',
				'10 minutes',
			],
			datasets: [
				{
					label: 'Environment Temperature',
					fill: false,
					showLine: true,
					lineTension: 0.5,
					borderWidth: 2,
					borderColor: '#f1cbb8',
					backgroundColor: [
						'#f1cbb8',
						'#f1cbb8'
					],
					data: lineData
				}
			]
		})
	}
	
  useEffect(() => {
		fetchStats()
	}, [])


		return(
			<div>
					<main className="pages-container">
						<div className="row" style={{padding: '20px'}}>
						{  stats && stats.map(stat=>{
							return(
								<div className="col-sm-4 overcard">
									<div className="overviewcard" style={{fontWeight: '600'}}>{stat.dev_name}</div>
									<div className="overviewcard">
										<small style={{color: 'grey'}}>Connected device - status active</small>
									</div>
								</div>
							)
						})}
						</div>
						<div className="row" style={{padding: '20px'}}>
							<div className="col-sm-4">
							<div class="row">
								<div class="card" style={{height: '400px'}}>
								<Pie
									data={pieChart}
									options={{
										title:{
											display:true,
											text:'Average Water level',
											fontSize:15,
										},
										legend:{
											display:true,
											position:'bottom'
										}
									}}
									height={150}
									width={150}
								/>
								</div>
							</div>
							<div class="row">
							{ stats.map(stat=>{
								return(
									<div class="card" style={{height: '200px'}}>
										<div className="col-sm-12" style={{display: 'flex'}}>
											<div style={{textAlign: "center"}}>
												<img style={{width: "120px", height: "120px"}} src={`data:image/jpeg;base64,${stat.stats_image_attributes}`} alt="captured plant"/>
											</div>
											<div style={{marginLeft: '12px'}}>
												<h6>Camera Image</h6>
												<div style={{display: 'flex'}}>
													<small>Status: </small>
													<small>{stat.stats_disease_name}</small>
												</div>
											</div>
										</div>
									</div>
								)
							})}
							</div>
							</div>
							<div className="col-sm-8">
								<div className="card" style={{height: '400px'}}>
								{ stats.map(stat=>{
							return(
									<Line
										data={lineChart}
										options={{
											title:{
												display:true,
												text:'Average Temperature per 2 minutes',
												fontSize:14
											},
											legend:{
												display:true,
												position:'right'
											}
										}}
									/>
							)})}
								</div>
							</div>
						</div>
					</main>
					<footer className="footer"></footer>
			</div>
		)
}
export default Dashboard;