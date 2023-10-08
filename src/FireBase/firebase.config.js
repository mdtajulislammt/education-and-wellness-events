// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC_BljItgIMWNS38c8SdrU7N-ruCTNyny8",
  authDomain: "academie-site.firebaseapp.com",
  projectId: "academie-site",
  storageBucket: "academie-site.appspot.com",
  messagingSenderId: "279921119160",
  appId: "1:279921119160:web:06a3878d23ca3c706fc94d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
 export default auth ;