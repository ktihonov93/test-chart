import React, { useState, useEffect } from "react";
import axios from "axios";
import GraphList from './Components/GraphList';
import './App.css';

function App() {

  const [testVolume, setTestVolume] = useState(null);
  const [devSum, setDevSum] = useState(null);
  const [testSum, setTestSum] = useState(null);
  const [prodSum, setProdSum] = useState(null);
  const [maxSum, setMaxSum] = useState(null);

  useEffect(() => {
    axios
      .get("https://rcslabs.ru/ttrp1.json")
      // Extract the DATA from the received response
      .then((res) => {
        setTestVolume(res.data);
      })
      .catch((err) => {
        alert(err);
      });
  }, []);  

  useEffect(() => {
    testVolume &&
      setDevSum(Object.keys(testVolume.dev).reduce((prev, key) => (prev + testVolume.dev[key]), 0)) &&

      setTestSum(Object.keys(testVolume.test).reduce((prev, key) => (prev + testVolume.test[key]), 0)) &&

      setProdSum(Object.keys(testVolume.prod).reduce((prev, key) => (prev + testVolume.prod[key]), 0))


  }, [testVolume]);

  useEffect(() => {
    devSum && testSum && prodSum && 
      
    setMaxSum(Math.max(devSum, testSum, prodSum, testVolume.norm));
    
  }, [devSum, testSum, prodSum, testVolume]);

  maxSum != null && alert(maxSum)

  return (
    <div className="App">
          <GraphList testVolume = {testVolume} maxSum = {maxSum}/>
    </div>
  );
}

export default App;
