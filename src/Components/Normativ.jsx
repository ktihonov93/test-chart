import React from "react";
import './Normativ.css';

function Normativ({ column, name }){

    return (
        <div className="Normativ">
            <div id="norm" style={{height: column + "px"}}>{column}</div>
            <div className="graphName">{name}</div>
        </div>
    )
}

export default Normativ;