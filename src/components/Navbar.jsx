import React from 'react';
import {FaCoins} from "react-icons/fa";
import "./Navbar.css"

const Navbar = () => {
    return (
        <nav className="navbar">
            <FaCoins className="icon"/>
            <h1 className="title">Top <span>Cryptocurrency</span></h1>
        </nav>
    );
}

export default Navbar;
