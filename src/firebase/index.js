import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyBc6ph-5QUV6TXHkDtXviySPGR6P_SJuTM",
  authDomain: "reactjs-e-commerce-tienda-moon.firebaseapp.com",
  projectId: "reactjs-e-commerce-tienda-moon",
  storageBucket: "reactjs-e-commerce-tienda-moon.appspot.com",
  messagingSenderId: "653927307236",
  appId: "1:653927307236:web:9d01a56d0026155f3dd9f1",
};
const app = initializeApp(firebaseConfig);
export const getFirebase = () => app;
export { getFirestore };
