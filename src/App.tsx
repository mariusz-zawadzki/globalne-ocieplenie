import React from 'react';
import logo from './logo.svg';
import './App.css';
// Firebase App (the core Firebase SDK) is always required and must be listed first
import * as firebase from "firebase/app";
// Add the Firebase products that you want to use
import "firebase/firestore";
import {Chart, Cities, DAYS} from "./chart/Chart";


const App: React.FC = () => {
    const updateCity = (city: string)=> {
        console.log("new city", city)
    };
    const updateYear = (city: string)=> {
        console.log("new myear", city)
    };
    return (
    <div className="App">
        <Chart series={[]}/>
    </div>
  );
}

export default App;
