import React, { useState, useEffect } from 'react';
import { getDatabase, ref, onValue} from "firebase/database";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB4rlKwpc6FI6S9sxnWGSmiaZdkHYTZ_lc",
  authDomain: "isfc-22-23.firebaseapp.com",
  databaseURL: "https://isfc-22-23-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "isfc-22-23",
  storageBucket: "isfc-22-23.appspot.com",
  messagingSenderId: "644796875891",
  appId: "1:644796875891:web:cf4374629aec79d6dd5606",
  measurementId: "G-DSW2HXZGNN"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);
const db = getDatabase(app);
const newposition = ref(db, "accel/");


export default function Dashboard() {
    const [data, setdata] = useState();

    useEffect(() => {
        onValue(newposition, (snapshot) => {
          snapshot.forEach((childSnapshot) => {
            const childKey = childSnapshot.key;
            const childData = JSON.parse(childSnapshot.val());
            setdata(childData);
            console.log(data);
          });
            
          });

        return () => {

        };
      });
    

    return (
      <>
      <div>
        <div>
          <h1>Gráfico de Linhas</h1>
          <script src="https://cdn.jsdelivr.net/npm/chart.js"></script>
        </div>
        <div>
          <canvas id="myChart"></canvas>
          <script src="grafico.js"></script>
        </div>
      </div>
    </>
    )
}
 
