// Import the functions you need from the Firebase SDKs
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage"; // Import Firebase storage

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBqqk7JB-DQ1l3RKj86rvP5Au0pSlFLqJE",
  authDomain: "zfcanada-f5181.firebaseapp.com",
  projectId: "zfcanada-f5181",
  storageBucket: "zfcanada-f5181.appspot.com",
  messagingSenderId: "630213565216",
  appId: "1:630213565216:web:308fc7c5df59eafa495545",
  measurementId: "G-QESL24XWT7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firestore
const db = getFirestore(app);

// Initialize Firebase Authentication
const auth = getAuth(app);

// Initialize Firebase Storage
const storage = getStorage(app); // Add this line to initialize Firebase Storage

// Export the database, authentication, and storage for use in your project
export { db, auth, storage };
