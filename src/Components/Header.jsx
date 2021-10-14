import React from "react";
import './Header.css';

function Header({ title }){
    return (
        <div className="Header">Количество пройденных тестов "{title}"</div>
    )
}

export default Header;