import { initializeApp } from 'firebase/app';
// @ts-ignore
import { initializeAuth, getReactNativePersistence } from "firebase/auth";
import { getFirestore } from 'firebase/firestore';
import ReactNativeAsyncStorage from '@react-native-async-storage/async-storage';

// Replace with your Firebase project configuration
const firebaseConfig = {
  apiKey: "AIzaSyB7lyzqJphhExdnLaDOO-LFajQBS71LGrk",
  authDomain: "coffee-shop-app-3e4fc.firebaseapp.com",
  projectId: "coffee-shop-app-3e4fc",
  storageBucket: "coffee-shop-app-3e4fc.firebasestorage.app",
  messagingSenderId: "420578820674",
  appId: "1:420578820674:web:5bad0b4ec89340ab8323db"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Auth with AsyncStorage Persistence
export const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(ReactNativeAsyncStorage)
});
export const db = getFirestore(app);
