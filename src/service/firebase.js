import firebase from "firebase/app";
import "firebase/auth";
import 'firebase/firestore';
import dotenv from 'dotenv'
dotenv.config();

const firebaseConfig = {
	apiKey: "",
	authDomain: "",
	databaseURL: "",
	projectId: "",
	storageBucket: "",
	messagingSenderId: "",
	appId: "",
	measurementId: ""
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
