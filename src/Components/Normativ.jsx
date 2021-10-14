import React from "react";
import './Normativ.css';

function Normativ({ column, name, maxSum }){

    return (
        <div className="Normativ">
            <div id="norm" style={{height: column*400/maxSum + "px"}}>{column}</div>
            <div className="graphName">{name}</div>
        </div>
    )
}

export default Normativ;