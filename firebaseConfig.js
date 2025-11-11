import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDhozz-lQc_pA0WRiBSgR7Z9tKsrShfck",
  authDomain: "mygrocery-90950.firebaseapp.com",
  projectId: "mygrocery-90950",
  storageBucket: "mygrocery-90950.appspot.com",
  messagingSenderId: "1073651983551",
  appId: "1:1073651983551:web:7482aa6f357e25d02ad20a",
  measurementId: "G-HTMGPGP36B",
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth = getAuth(app);
export const storage = getStorage(app);
