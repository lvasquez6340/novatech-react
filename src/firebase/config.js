import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "TU_API_KEY",
  authDomain: "novatech-reac.firebaseapp.com",
  projectId: "novatech-reac",
  storageBucket: "novatech-reac.firebasestorage.app",
  messagingSenderId: "298690370297",
  appId: "1:298690370297:web:e4b8df4d139805c1786028"
};

const app = initializeApp(firebaseConfig);

export default app;