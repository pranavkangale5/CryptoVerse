import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBLr2QUriRCpp2e1wz_003G424bWefyM5o",
  authDomain: "communityforum-cryptoverse.firebaseapp.com",
  databaseURL: "https://communityforum-cryptoverse-default-rtdb.firebaseio.com",
  projectId: "communityforum-cryptoverse",
  storageBucket: "communityforum-cryptoverse.appspot.com",
  messagingSenderId: "926605131352",
  appId: "1:926605131352:web:b23c462200f0b4db9d542d",
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
