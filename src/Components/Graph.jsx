import React from "react";
import "./Graph.css";

function Graph({ column, name, maxSum }){

    return (
        <div className="graph">
            <div id="front" style={{height: column.front*400/maxSum + "px"}}>{column.front}</div>
            <div id="back" style={{height: column.back*400/maxSum + "px"}}>{column.back}</div>
            <div id="db" style={{height: column.db*400/maxSum + "px"}}>{column.db}</div>
            <div className="graphName">{name}</div>
        </div>
    )
}

export default Graph;