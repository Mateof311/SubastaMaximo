import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
    apiKey: "AIzaSyDdmByG4tBh7BIhfHESuLJWafPdan_cBVg",
    authDomain: "subastamaximo.firebaseapp.com",
    projectId: "subastamaximo",
    storageBucket: "subastamaximo.firebasestorage.app",
    messagingSenderId: "307757922250",
    appId: "1:307757922250:web:38acfa1846c0d52dc50133",
    measurementId: "G-5Z4LD1ZXRX"
};

// Inicializar Firebase y la base de datos
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

export { database };