import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBolyAwVf-e9B0jFUz15H352IBHRxuxZTU",
  authDomain: "login-authentication-3c980.firebaseapp.com",
  projectId: "login-authentication-3c980",
  storageBucket: "login-authentication-3c980.appspot.com",
  messagingSenderId: "245036423721",
  appId: "1:245036423721:web:271d19595f9f6f45c7da38",
};

const firebaseApp = initializeApp(firebaseConfig);
const auth = getAuth(firebaseApp);
const googleProvider = new GoogleAuthProvider();
export { auth, googleProvider };
