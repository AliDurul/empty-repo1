import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyCbKuHywroppQO-lEesQX8OsE6JmZFFXho",
  authDomain: "chat-app-ff4d4.firebaseapp.com",
  projectId: "chat-app-ff4d4",
  storageBucket: "chat-app-ff4d4.appspot.com",
  messagingSenderId: "545439327202",
  appId: "1:545439327202:web:852bd7de421f0212a20fbb",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
