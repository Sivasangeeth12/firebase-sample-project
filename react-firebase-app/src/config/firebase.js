import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';
import { getDatabase } from "firebase/database";
import {getFirestore} from 'firebase/firestore'

function StartFirebase(){
const firebaseConfig = {
  apiKey: "AIzaSyC-UijbIWzHpowu9yuWjXUSxLEfHTxHDY8",
  authDomain: "fir-demo-72b25.firebaseapp.com",
  projectId: "fir-demo-72b25",
  databaseURL:"https://fir-demo-72b25-default-rtdb.firebaseio.com",
  storageBucket: "fir-demo-72b25.appspot.com",
  messagingSenderId: "459350825499",
  appId: "1:459350825499:web:0e0374a30e50fbb61376be",
  measurementId: "G-L7VFN3REBW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
return getDatabase(app);
}
export default StartFirebase;