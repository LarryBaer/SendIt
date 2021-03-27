import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyB3hBEyZmLN_vBf7HPpsaWJkqUp5z-veEc",
  authDomain: "sendit-97f6a.firebaseapp.com",
  databaseURL: "https://sendit-97f6a-default-rtdb.firebaseio.com",
  projectId: "sendit-97f6a",
  storageBucket: "sendit-97f6a.appspot.com",
  messagingSenderId: "424138421758",
  appId: "1:424138421758:web:29b159bf6e02343be13caf",
  measurementId: "G-WTLND7PR3S",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();

export { db };
export { firebaseConfig };
