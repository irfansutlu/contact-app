import { getDatabase } from "firebase/database";
import { initializeApp } from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyB_H_zk_PyrI8kTIFwSzQUNV30HAYxnTOQ",
  authDomain: "contact-app-c9748.firebaseapp.com",
  databaseURL:
    "https://contact-app-c9748-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "contact-app-c9748",
  storageBucket: "contact-app-c9748.appspot.com",
  messagingSenderId: "939905378818",
  appId: "1:939905378818:web:8105df870f77a44f1e551b",
  measurementId: "G-6R6MF08Z43",
};

const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

export { database, app };