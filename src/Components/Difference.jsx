import React from "react";
import './Difference.css'

function Difference({ diff }){

    let arrow = '';

    function setColor(diff){
        if(diff>0){
            arrow = '⬆️';
            return "#00cc99";
        }else if (diff<0) {
            arrow = '⬇️';
            return '#fc440f';
        }else{
            return '#898290';
        }
    }

    return (
        <div className="Difference" style={{backgroundColor: setColor(diff)}} >{arrow} {diff>0 ? '+' + diff : diff}</div>
    )
}

export default Difference;