import React, { useContext, useState, useEffect } from "react";
// import React from "react";
import { Redirect } from 'react-router-dom';
import { signInGoogleAuthentication } from '../service/firebase';
// import { loginWithEmailAndPassword } from '../service/firebase';
import { UserContext } from '../provider/userProvider';
import '../styles/common.css';
import '../styles/authentication.css';
import logo from '../icons/logo-3.png';
import googleButton from "../images/GoogleSignInLight.png";

export default function Login() {
	
	// const [email, setEmail] = useState('');
	// const [password, setPassword] = useState('');
	// const [error, setError] = useState(null);

	// const onSubmitHandler = (e) => {
	// 	const {name, value} = e.currentTarget;

	// 	if(name == 'userEmail'){
	// 		setEmail(value);
	// 	}else if(name == 'userPassword'){
	// 		setPassword(value);
	// 	}
	// }

	const user = useContext(UserContext)
  const [redirect, setredirect] = useState(null)

  useEffect(() => {
    if (user) {
      setredirect('/dashboard')
    }
  }, [user])
  if (redirect) {
    return <Redirect to={redirect}/>
	}
	
	const loginCard = {
		marginBottom: '10px',
		padding: '30px',
		float: 'none',
		margin: '0 auto',
		borderRadius: '5px',
		// backgroundColor: '#f8ece0',
		boxShadow: '0 4px 8px 0 rgba(0,0,0,0.2)',
	};
	

	return(
		<div className="container">
			<div className="row">
				<div className="col-sm-4 mx-auto">
					<div style={loginCard}>
						<div class="card-body">
							<div className="col-sm-12">
								<div className="top" style={{textAlign: 'center'}}>
									<img className="logo-image" src={logo} alt="logo" style={{width: '50%',}}/>
									<h2 className="heading-2" style={{color: 'grey'}}>AgriGrowth</h2>
								</div>
								<h4 className="sub-heading-grey">Sign in .</h4>
								<div className="form-floating mb-3">
									<input 
										type="email"
										name="userEmail"
										className="form-control"
										id="floatingInput"
										placeholder="name@example.com"
										// onChange={e => onSubmitHandler(e.target.value)}
									/>
									<label for="floatingInput">Email address</label>
								</div>
								<div className="form-floating mb-3">
									<input
										type="password"
										name="userPassword"
										className="form-control"
										id="floatingInput"
										placeholder="****"
										// onChange={e => onSubmitHandler(e.target.value)}
									/>
									<label for="floatingInput">Password</label>
								</div>
								<div style={{textAlign: 'center', marginTop: '35px'}}>
									<a onClick={signInGoogleAuthentication}>
										<img 
											src={googleButton}
											alt="sign in with google"
											style={{width:'80%', boxShadow: '0 4px 8px 0 rgba(0,0,0,0.2)'}}
										/>
									</a>
								</div>
								<div className="button-2-position">
									{/* <Link to="/dashboard">
										<button className="button-2" onClick={loginWithEmailAndPassword}>Button</button>
									</Link> */}
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}