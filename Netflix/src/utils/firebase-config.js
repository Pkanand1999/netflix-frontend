// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: `${import.meta.env.VITE_FIREBASE}`,
  authDomain: "netflix-clone-9de02.firebaseapp.com",
  projectId: "netflix-clone-9de02",
  storageBucket: "netflix-clone-9de02.appspot.com",
  messagingSenderId: "747845834192",
  appId: "1:747845834192:web:20403c25dd7f00a32b95d5",
  measurementId: "G-LNZCDDF0ZZ"
};

const app = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(app);