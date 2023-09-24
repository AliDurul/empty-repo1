// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/app";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCwg9YgPsLTIsYsO8BlpUMQWhB-e4Yplzg",
  authDomain: "chat-app-fcb41.firebaseapp.com",
  projectId: "chat-app-fcb41",
  storageBucket: "chat-app-fcb41.appspot.com",
  messagingSenderId: "568065790037",
  appId: "1:568065790037:web:2acf7b61e658d02c8c84dc"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth()