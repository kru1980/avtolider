import firebase from "firebase";

const config = {
  apiKey: "AIzaSyARnqWq1QmYRtdAYlkaxypZxNhyftOf6A8",
  authDomain: "avtolider-adc37.firebaseapp.com",
  databaseURL: "https://avtolider-adc37.firebaseio.com",
  projectId: "avtolider-adc37",
  storageBucket: "avtolider-adc37.appspot.com",
  messagingSenderId: "173519448915"
};

firebase.initializeApp(config);

const database = firebase.database();

export default database;
