// import React, { useEffect } from "react";
import React from "react";
import { Link } from 'react-router-dom';
import '../styles/home.css';
import '../styles/common.css';
import dataImage from '../icons/data-protection.png';
import leaf from '../images/leaf.png';

export const Home = () => {

	return(
		<div className="container">
			<div className="row">
				<div className="col-sm-8 mx-auto">
					<div className="card" style={{height: '500px', backgroundColor: '#F8ECE0'}}>
						<div class="card-body">
							<div className="row">
								<div className="col-sm-8">
									<h1 className="heading-1" style={{color: '#045449', textAlign: 'left', marginBottom: '0px'}}>AgriGrowth</h1>
									<h4 className="sub-heading-grey">
										A farming monitoring tool, that will allow you
										to maintain and help adjust your crop conditions.
										Hope this application encourages you to grow more plants, learn more about the diseases found and 
										how to stop its spread.
									</h4>
									<Link to="/login">
										<button className="button-3">Get Started</button>
									</Link>
								</div>
								<div className="col-sm-4">
									<img src={leaf} alt="logo" style={{width: '400px'}}/>
								</div>
							</div>
						</div>
						<div className="col-sm-3">
							<div className="bottom-content">
								<img className="bottom-icons" src={dataImage} alt="data"/>
								<h3 className="heading-3">Data mining</h3>
								<h4 className="sub-heading-green">Accurate readings from sensors</h4>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}
export default Home;