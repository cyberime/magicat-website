import { initializeApp } from "https://www.gstatic.com/firebasejs/12.14.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/12.14.0/firebase-auth.js";

// 🔥 CONFIG ASLI PROJECT MAGICAT KAMU
const firebaseConfig = {
  apiKey: "AIzaSyAUSz-1COdsp1tftD25TtChKDfMJyKUJrc",
  authDomain: "magicat-69e22.firebaseapp.com",
  projectId: "magicat-69e22",
  storageBucket: "magicat-69e22.firebasestorage.app",
  messagingSenderId: "852307177097",
  appId: "1:852307177097:web:46556a72f89cf15d936058"
};

// 🚀 INIT FIREBASE
const app = initializeApp(firebaseConfig);

// 🔑 AUTH EXPORT
export const auth = getAuth(app);