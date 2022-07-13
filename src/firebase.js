import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyAP4SR1nJIJP8iv7-uZVwQRGJhfVnPNZCY',
  authDomain: 'react-blog-cd4ea.firebaseapp.com',
  projectId: 'react-blog-cd4ea',
  storageBucket: 'react-blog-cd4ea.appspot.com',
  messagingSenderId: '675780077909',
  appId: '1:675780077909:web:9b8a70ec8bc51e0432a7dc',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const Auth = getAuth(app);
export const Provider = new GoogleAuthProvider();
