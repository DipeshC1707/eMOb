// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth"
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBePBegIwTLGX-jDgvIFu4u8Dq8G0CM1MA",
  authDomain: "emob-64579.firebaseapp.com",
  projectId: "emob-64579",
  storageBucket: "emob-64579.appspot.com",
  messagingSenderId: "439702342990",
  appId: "1:439702342990:web:157b73a17ae6f2d940621f",
  measurementId: "G-7HPBMTE3QH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const storage = getStorage(app);
export const db = getFirestore(app);