import React from "react";
import './Footer.css'

function Footer({ line, color }){

    return (
        <div className="Footer">
            <div className="color" style={{backgroundColor: color}}></div>
            <div className="line">{line}</div>
        </div>
    )
}

export default Footer;