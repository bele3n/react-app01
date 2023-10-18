// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDAOXtsLbr1bfe_bM6roaSB8-VOOnpO9lo",
  authDomain: "sitioreact-ba691.firebaseapp.com",
  projectId: "sitioreact-ba691",
  storageBucket: "sitioreact-ba691.appspot.com",
  messagingSenderId: "698818183768",
  appId: "1:698818183768:web:7576130001686a9ae6c02d",
  measurementId: "G-53E7BJMYMY"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);