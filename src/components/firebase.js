// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore"

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCRzr1klTfDFqZ6aEy2a9Gsfb4XKX5jmx4",
  authDomain: "application-form-72bb6.firebaseapp.com",
  projectId: "application-form-72bb6",
  storageBucket: "application-form-72bb6.firebasestorage.app",
  messagingSenderId: "385221117038",
  appId: "1:385221117038:web:540cc4dc3662c31ff0d27f"
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
export const db = getFirestore(app)