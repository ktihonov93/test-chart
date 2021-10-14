import React from "react";
import Graph from './Graph';
import "./GraphList.css";
import Normativ from './Normativ'

function GraphList({ testVolume, maxSum }){

   // {maxSum !== null && console.log(maxSum)}

    return (
        <div className="graphList">
            <Graph column = {testVolume != null && testVolume.dev} name = "dev" maxSum = {maxSum !== false && maxSum} /> 
            <Graph column = {testVolume != null && testVolume.test} name = "test" maxSum = {maxSum !== false && maxSum} />
            <Graph column = {testVolume != null && testVolume.prod} name = "prod" maxSum = {maxSum !== false && maxSum} />
            <Normativ column = {testVolume != null && testVolume.norm} name = "Норматив" maxSum = {maxSum !== false && maxSum} />
        </div>
    )
}

export default GraphList;