import { initializeApp } from "firebase/app";
import {
  getAuth,
  GithubAuthProvider,
  GoogleAuthProvider,
} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBdKJ2alnWeXEYAXkspa66Uc92janfRSTQ",
  authDomain: "pulse-ai-ef752.firebaseapp.com",
  projectId: "pulse-ai-ef752",
  storageBucket: "pulse-ai-ef752.firebasestorage.app",
  messagingSenderId: "958330768702",
  appId: "1:958330768702:web:93a91e4392f358621d306f",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const githubProvider = new GithubAuthProvider();
export const googleProvider = new GoogleAuthProvider();
googleProvider.addScope("https://www.googleapis.com/auth/gmail.readonly");