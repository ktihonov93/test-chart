import React from "react";
import "./Graph.css";

function Graph({ column, name, maxSum }){

   // {maxSum != null && console.log(maxSum)}

    return (
        <div className="graph">
            <div id="front" style={{height: /*column>15?*/ column.front*400/maxSum /*: 15*/ + "px"}}>{column.front}</div>
            <div id="back" style={{height: /*column>15?*/ column.back*400/maxSum /*: 15*/ + "px"}}>{column.back}</div>
            <div id="db" style={{height: /*column>15?*/ column.db*400/maxSum /*: 15*/ + "px"}}>{column.db}</div>
            <div className="graphName">{name}</div>
        </div>
    )
}

export default Graph;