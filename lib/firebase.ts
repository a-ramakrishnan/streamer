// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use

// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration

// const firebaseConfig = {
//   apiKey: "AIzaSyAhgtcOCRKy9iXgItiZ7OIL9sF_SZSDnzc",

//   authDomain: "streamer-e6921.firebaseapp.com",

//   projectId: "streamer-e6921",

//   storageBucket: "streamer-e6921.appspot.com",

//   messagingSenderId: "950284173075",

//   appId: "1:950284173075:web:59f83e833bdeea5393e4e6",
// };

const firebaseConfig = {
  apiKey: "AIzaSyDo8h3lUAEQHaUL7z_Q1E2a66CxUk74a6w",
  authDomain: "netflix-clone-a0797.firebaseapp.com",
  projectId: "netflix-clone-a0797",
  storageBucket: "netflix-clone-a0797.appspot.com",
  messagingSenderId: "174208251393",
  appId: "1:174208251393:web:36f667740ea8744dbdf200"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const auth = getAuth();

export default app;
export { auth, db };
