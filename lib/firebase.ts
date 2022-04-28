// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use

// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration

const firebaseConfig = {
  apiKey: "AIzaSyAhgtcOCRKy9iXgItiZ7OIL9sF_SZSDnzc",

  authDomain: "streamer-e6921.firebaseapp.com",

  projectId: "streamer-e6921",

  storageBucket: "streamer-e6921.appspot.com",

  messagingSenderId: "950284173075",

  appId: "1:950284173075:web:59f83e833bdeea5393e4e6",
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const auth = getAuth();

export default app;
export { auth, db };
