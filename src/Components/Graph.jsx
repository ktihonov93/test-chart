import React from "react";
import "./Graph.css";

function Graph({ column, name, maxSum }){

    console.log(maxSum)

    return (
        <div className="graph">
            <div id="front" style={{height: column.front + "px"}}>{column.front}</div>
            <div id="back" style={{height: column.back + "px"}}>{column.back}</div>
            <div id="db" style={{height: column.db + "px"}}>{column.db}</div>
            <div className="graphName">{name}</div>
        </div>
    )
}

export default Graph;