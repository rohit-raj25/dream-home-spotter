// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-5d529.firebaseapp.com",
  projectId: "mern-estate-5d529",
  storageBucket: "mern-estate-5d529.appspot.com",
  messagingSenderId: "172047035079",
  appId: "1:172047035079:web:e5641a7ed9dac571f96ce2",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
