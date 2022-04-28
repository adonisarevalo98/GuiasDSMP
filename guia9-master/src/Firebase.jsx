import firebase from 'firebase/app'
import 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyAEen8eyEXfvz5njgw_OhUkGBf-KJY-bdc",
  authDomain: "crudangularfirebase-39f0c.firebaseapp.com",
  databaseURL: "https://crudangularfirebase-39f0c.firebaseio.com",
  projectId: "crudangularfirebase-39f0c",
  storageBucket: "crudangularfirebase-39f0c.appspot.com",
  messagingSenderId: "535534430671",
  appId: "1:535534430671:web:4c720592c8db57b7b80aba",
  measurementId: "G-MHFR55GNK4"
  };
  const fb =  firebase.initializeApp(firebaseConfig);
  export const db = fb.firestore();

