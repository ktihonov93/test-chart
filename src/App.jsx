import React, { useState, useEffect } from "react";
import axios from "axios";
import GraphList from './Components/GraphList';
import Difference from "./Components/Difference";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import LoadingSpinner from "./Components/LoadingSpinner";
import './App.css';

function App() {

  const [testVolume, setTestVolume] = useState(null);
  const [firstDiff, setFirstDiff] = useState(null);
  const [secondDiff, setSecondDiff] = useState(null);  
  const [maxSum, setMaxSum] = useState(null);
  const [loading, setLoading] = useState(true);
  const [number, setNumber] = useState(1);

  const getTestVolume = async () => {

    let nextStep

    if(number >= 1 && number < 5){
      nextStep = number + 1;
    }else if(number === 5){
      nextStep = 1;
    }     
    
    setNumber(nextStep);

    let resTestVolume = await axios.get(`https://rcslabs.ru/ttrp${number}.json`);

    setTestVolume(resTestVolume.data);

    let devSum = Object.keys(resTestVolume.data.dev).reduce((prev, key) => (prev + resTestVolume.data.dev[key]), 0);    

    let testSum = Object.keys(resTestVolume.data.test).reduce((prev, key) => (prev + resTestVolume.data.test[key]), 0);

    setFirstDiff(testSum - devSum)

    let prodSum = Object.keys(resTestVolume.data.prod).reduce((prev, key) => (prev + resTestVolume.data.prod[key]), 0);

    setSecondDiff(prodSum - testSum)
    
    setMaxSum(Math.max(devSum, testSum, prodSum, resTestVolume.data.norm));

    setLoading(false);

  }

  useEffect(() => {    
      
    getTestVolume();

  }, []);

  return (

    <div className="loading">
      
      { !loading ? (

      <div className="App">

      <Header title = {testVolume != null && testVolume.title}/>

      <div className="diffs">
        <Difference diff = {firstDiff} diff1 = {0} diff2 = {firstDiff} maxSum = {maxSum}/>
        <Difference diff = {secondDiff}  diff1 = {firstDiff} diff2 = {firstDiff + secondDiff} maxSum = {maxSum}/>        
      </div>
     
     <div className="GraphListInApp">
      <GraphList testVolume = {testVolume} maxSum = {maxSum} />
     </div>
      

      <div className="footers">
          <Footer line = "Клиентская часть" color="#4ab6e8" />
          <Footer line = "Серверная часть" color="#aa6fac" />
          <Footer line = "База данных" color="#e85498" />
      </div>


      <div className="button-line">
        <button className="button" onClick={getTestVolume}>Next</button>
      </div>
      

    </div>
    ) : (
      <LoadingSpinner />
    )}
    </div>

    
  );
}

export default App;
