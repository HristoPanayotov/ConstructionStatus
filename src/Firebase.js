// Importing functions from the SDK's
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getAuth } from "firebase/auth";
const { initializeAppCheck, ReCaptchaV3Provider } = require("firebase/app-check");

// Firebase Configuration
const firebaseConfig = {
  apiKey: process.env.CS_FIREBASE_API_KEY,
  authDomain: process.env.CS_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.CS_FIREBASE_PROJECT_ID,
  storageBucket: process.env.CS_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.CS_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.CS_FIREBASE_APP_ID,
  measurementId: process.env.CS_FIREBASE_MEASUREMENT_ID 
};

export const appCheck = initializeAppCheck(app, {
    provider: new ReCaptchaV3Provider(process.env.CS_FIREBASE_CAPTCHA),

    //If true, the SDK automatically refreshes App Check tokens as needed.
    isTokenAutoRefreshEnabled: true
});

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
export const db = getFirestore(app)
export const auth = getAuth(app);
export const storage = getStorage(app)
export default app;