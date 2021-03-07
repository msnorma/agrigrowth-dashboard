import firebase from "firebase/app";
import "firebase/auth";
import 'firebase/firestore';
import dotenv from 'dotenv'
dotenv.config();

const firebaseConfig = {
	apiKey: "AIzaSyBwazMOv2MyiI6rlG6Lq34RJJ82PXilw2Ux",
	authDomain: process.env.REACT_APP_AUTH_DOMAIN,
	databaseURL: process.env.REACT_APP_DATABASE_URL,
	projectId: process.env.REACT_APP_PROJECT_ID,
	storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
	messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
	appId: process.env.REACT_APP_APP_ID,
	measurementId: process.env.REACT_APP_MEASUREMENT_ID
};
// firebase.analytics();

const firebaseApp = firebase.initializeApp(firebaseConfig);
export const auth = firebaseApp.auth();
const googleProvider = new firebase.auth.GoogleAuthProvider()

//	Sigining in with google
export const signInGoogleAuthentication = () => {
  auth.signInWithPopup(googleProvider).then((res) => {
    console.log(res.user)
  }).catch((error) => {
    console.log(error.message)
  })
}

// Login with email and password
// export const loginWithEmailAndPassword = () => {
//   auth.createUserWithEmailAndPassword(email, password)
//   .then(res => {
//     console.log(res.user)
//   }).catch((error) => {
//     console.log(error.message)
//   })
// }

// 	Loging out and redirect to login page
export const logOut = () => {
  auth.signOut().then(()=> {
    
    console.log('logged out')
  }).catch((error) => {
    console.log(error.message)
  })
}

export const db = firebase.firestore();

// export{db};
