import React from "react";
import './Difference.css'

function Difference({ diff }){

    function setColor(diff){
        if(diff>0){
            return "#00cc99";
        }else if (diff<0) {
            return '#fc440f';
        }else{
            return '#898290';
        }
    }

    return (
        <div className="Difference" style={{backgroundColor: setColor(diff)}} >{diff>0 ? '+' + diff : diff}</div>
    )
}

export default Difference;