import { initializeApp } from "firebase/app";
import {getStorage} from "firebase/storage"
const firebaseConfig = {
  apiKey: "AIzaSyCfJaRmQeuPiwSkylHhmB7_aOdFthTLufg",
  authDomain: "fileupload-efef9.firebaseapp.com",
  projectId: "fileupload-efef9",
  storageBucket: "fileupload-efef9.appspot.com",
  messagingSenderId: "95966426003",
  appId: "1:95966426003:web:d4586d29aa1b0fb1116e66"
};

const app = initializeApp(firebaseConfig);
export const storage=getStorage(app)