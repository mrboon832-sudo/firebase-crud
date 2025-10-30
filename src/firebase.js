import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDlG1V3l91dd3rUF7bdxNScgPRCsVbxZWg",
  authDomain: "bonny-project-639bc.firebaseapp.com",
  projectId: "bonny-project-639bc",
  storageBucket: "bonny-project-639bc.firebasestorage.app",
  messagingSenderId: "1010859862059",
  appId: "1:1010859862059:web:d1f165805ea3bd8f01626e",
  measurementId: "G-45XYRSQ555"
};

const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);

export default db;

