import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "API KEY",
  authDomain: "communityforum-cryptoverse.firebaseapp.com",
  databaseURL: "https://communityforum-cryptoverse-default-rtdb.firebaseio.com",
  projectId: "communityforum-cryptoverse",
  storageBucket: "communityforum-cryptoverse.appspot.com",
  messagingSenderId: "ID",
  appId: "APP ID",
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
