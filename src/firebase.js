import firebase from "firebase/app";
import "firebase/database";
import "firebase/storage";

const config = {
  apiKey: "AIzaSyARnqWq1QmYRtdAYlkaxypZxNhyftOf6A8",
  authDomain: "avtolider-adc37.firebaseapp.com",
  databaseURL: "https://avtolider-adc37.firebaseio.com",
  projectId: "avtolider-adc37",
  storageBucket: "avtolider-adc37.appspot.com",
  messagingSenderId: "173519448915"
};

const fire = firebase.initializeApp(config);

export default fire;
