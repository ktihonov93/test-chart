import React, { useState, useEffect } from "react";
import axios from "axios";
import GraphList from './Components/GraphList';
import Difference from "./Components/Difference";
import './App.css';

function App() {

  const [testVolume, setTestVolume] = useState(null);
  const [firstDiff, setFirstDiff] = useState(null);
  const [secondDiff, setSecondDiff] = useState(null);  
  const [maxSum, setMaxSum] = useState(null);

  const getTestVolume = async () => {

    let resTestVolume = await axios.get("https://rcslabs.ru/ttrp1.json");

    setTestVolume(resTestVolume.data);

    let devSum = Object.keys(resTestVolume.data.dev).reduce((prev, key) => (prev + resTestVolume.data.dev[key]), 0);    

    let testSum = Object.keys(resTestVolume.data.test).reduce((prev, key) => (prev + resTestVolume.data.test[key]), 0);

    setFirstDiff(testSum - devSum)

    let prodSum = Object.keys(resTestVolume.data.prod).reduce((prev, key) => (prev + resTestVolume.data.prod[key]), 0);

    setSecondDiff(prodSum - testSum)
    
    setMaxSum(Math.max(devSum, testSum, prodSum, resTestVolume.data.norm));

  }

  useEffect(() => {    
      
    getTestVolume();

  }, []);

  return (
    <div className="App">
      <div className="diffs">
        <Difference diff = {firstDiff} />
        <Difference diff = {secondDiff} />
      </div>
     
      <GraphList testVolume = {testVolume} maxSum = {maxSum} />
    </div>
  );
}

export default App;
