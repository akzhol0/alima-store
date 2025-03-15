import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAJikQVtbPkIMqy2By5LIwBhYr5uDkCpxA",
  authDomain: "online-shop-903ac.firebaseapp.com",
  projectId: "online-shop-903ac",
  storageBucket: "online-shop-903ac.appspot.com",
  messagingSenderId: "493243824156",
  appId: "1:493243824156:web:da4a34b9986a6dab5f47d9",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app)