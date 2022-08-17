// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCqxbIKVvWT67C_R_FNXiT1zKkwxx1BHR8",
  authDomain: "fir-login-aug2022.firebaseapp.com",
  projectId: "fir-login-aug2022",
  storageBucket: "fir-login-aug2022.appspot.com",
  messagingSenderId: "493723772592",
  appId: "1:493723772592:web:060125a37b202203967d75",
  measurementId: "G-D9M8WDYYW8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);