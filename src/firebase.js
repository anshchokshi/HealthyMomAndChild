import firebase from "firebase/app";
import 'firebase/auth';
import 'firebase/firestore';


const firebaseConfig = {
  apiKey: "AIzaSyCQlQsPQbepIlZJsrqhksUpZECUj7Qq-Tw",
  authDomain: "healthy-mom-and-child.firebaseapp.com",
  projectId: "healthy-mom-and-child",
  storageBucket: "healthy-mom-and-child.appspot.com",
  messagingSenderId: "334513167229",
  appId: "1:334513167229:web:a9790f433de02af8c80a14",
  measurementId: "G-PS6SXFGV24"
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
} 

export { firebase };