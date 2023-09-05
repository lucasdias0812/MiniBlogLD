// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {
  apiKey: "AIzaSyAuHiEc7ghug1F5W-P1dxbCDgD2MMnQJNA",
  authDomain: "miniblogld.firebaseapp.com",
  projectId: "miniblogld",
  storageBucket: "miniblogld.appspot.com",
  messagingSenderId: "618004827151",
  appId: "1:618004827151:web:90c6f3adfc46791b04277a",
  measurementId: "G-DDHHNJ6YR0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);

export {db};