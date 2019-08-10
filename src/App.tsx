import React from 'react';
import logo from './logo.svg';
import './App.css';
// Firebase App (the core Firebase SDK) is always required and must be listed first
import * as firebase from "firebase/app";
// Add the Firebase products that you want to use
import "firebase/firestore";
import ReactEcharts from 'echarts-for-react';

type DocumentSnapshot = firebase.firestore.DocumentSnapshot;

const firebaseConfig = {
    apiKey: "AIzaSyDv_AFGTRAMzUWkyNpCd-bRneIm6_ndON4",
    authDomain: "globalne-ocieplenie.firebaseapp.com",
    databaseURL: "https://globalne-ocieplenie.firebaseio.com",
    projectId: "globalne-ocieplenie",
    storageBucket: "globalne-ocieplenie.appspot.com",
    messagingSenderId: "183270572278",
    appId: "1:183270572278:web:c0b9035f55d0f70b"
};
// Initialize Firebase
// firebase.initializeApp(firebaseConfig);
// const db = firebase.firestore();
// const doc = db.collection("1951").doc('KIELCE-SUKÓW');
// const docs = doc.get();
//
// class CityTemp {
//     name: string = "";
//     temperatures: Map<string,string> | undefined;
// }
//
// Promise.all([docs]).then(function(values: DocumentSnapshot[]) {
//     // Document was found in the cache. If no cached document exists,
//     // an error will be returned to the 'catch' block below.
//     console.log(values)
//     values.forEach( value=>{
//         let cityTemp:CityTemp = value.data() as CityTemp;
//         console.log("Cached document data:", cityTemp.name);
//         console.log("Cached document data:", cityTemp.temperatures);
//     })
// }).catch(function(error) {
//     console.log("Error getting cached document:", error);
// });
const options = {
    title: {
        text: 'ECharts entry example'
    },
    tooltip: {},
    legend: {
        data:['1951','1984', '2018']
    },
    xAxis: {
        data: ["01_01","01_02","01_03","01_04","01_05","01_06"]
    },
    yAxis: {},
    series: [{
        name: '1951',
        type: 'line',
        data: [10,20,30,40,50,60]
    },{
        name: '1984',
        type: 'line',
        data: [11,22,33,44,55,66]
    },{
        name: '2018',
        type: 'line',
        data: [9,18,27,36,45,54]
    }]
}
const App: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
          <div>
              <ReactEcharts theme={"dark"} option={options} />
          </div>
      </header>
    </div>
  );
}

export default App;
