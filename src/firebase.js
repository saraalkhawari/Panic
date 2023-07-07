// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDeypMaf_OXvaHFgFipqAg84q56OW0yutY",
  authDomain: "panic-fa8d1.firebaseapp.com",
  projectId: "panic-fa8d1",
  storageBucket: "panic-fa8d1.appspot.com",
  messagingSenderId: "6690188257",
  appId: "1:6690188257:web:8be0920d1a2eee7f4fc0a0",
  measurementId: "G-3YGEXRQ3BN",
  databaseURL: "https://panic-fa8d1-default-rtdb.europe-west1.firebasedatabase.app",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
