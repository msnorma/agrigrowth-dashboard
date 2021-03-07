import firebase from "firebase/app";
import "firebase/auth";
import 'firebase/firestore';
import dotenv from 'dotenv'
dotenv.config();

const firebaseConfig = {
	apiKey: "AIzaSyBwazMOv2MyiI6rlG6Lq34RJJ82PXilw2U",
	authDomain: "agrigrowth-7899e.firebaseapp.com",
	databaseURL: "https://agrigrowth-7899e-default-rtdb.firebaseio.com",
	projectId: "agrigrowth-7899e",
	storageBucket: "agrigrowth-7899e.appspot.com",
	messagingSenderId: "363674113106",
	appId: "1:363674113106:web:a00bd7cd706d553f5a7b8b",
	measurementId: "G-V0Y3BLTYX7"
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
