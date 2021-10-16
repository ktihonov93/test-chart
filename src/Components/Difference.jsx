import React from "react";
import './Difference.css'

function Difference({ diff, diff1, diff2, maxSum }){

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
        <div className="Difference">
            <div className="vector12" style={{height: -400*diff1/maxSum + 50 + 'px'}}></div>
            <div className="vector11"></div>            
            <div className="diff" style={{backgroundColor: setColor(diff)}}>{arrow} {diff>0 ? '+' + diff : diff}</div>
            <div>
            <div className="vector21"></div>
            <div className="vector22" style={{height: -400*diff2/maxSum + 50 + 'px'}}></div>
            </div>
            
        </div>
    )
}

export default Difference;