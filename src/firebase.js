
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyDdGw6jnhVMklUUrCT_Rv-_aLgPQ-CXBsg",
  authDomain: "hhhh-362fd.firebaseapp.com",
  projectId: "hhhh-362fd",
  storageBucket: "hhhh-362fd.appspot.com",
  messagingSenderId: "443691369760",
  appId: "1:443691369760:web:346469716e34e05c46c345"
};


export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore()