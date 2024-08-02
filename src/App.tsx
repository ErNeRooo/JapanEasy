import "./App.module.sass";
import { DictionaryPage } from "./components/DictionaryPage/DictionaryPage";
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import firebase from "firebase/compat/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

const firebaseConfig = {
  apiKey: "AIzaSyAuXbqhGOkU9ySIfio0tMvcN4GjXMg6vhg",
  authDomain: "nihon-go-kaizen.firebaseapp.com",
  projectId: "nihon-go-kaizen",
  storageBucket: "nihon-go-kaizen.appspot.com",
  messagingSenderId: "568822236498",
  appId: "1:568822236498:web:0e83f37c1c63851227e68b",
  measurementId: "G-8VE2QR44F3",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

firebase.initializeApp(firebaseConfig);

function App() {
  return <DictionaryPage></DictionaryPage>;
}

export default App;
