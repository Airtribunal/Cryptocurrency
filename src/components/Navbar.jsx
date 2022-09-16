import React from 'react';
import { useState } from 'react';
import {FaCoins} from "react-icons/fa";
import "./Navbar.css"

const Navbar = (props) => {

    const { handleChange } = props

    return (
        <nav className="navbar">
            <FaCoins className="icon"/>
            <h1 className="title">Top <span>Cryptocurrency</span></h1>
            <input 
                type="number" 
                className="amount" 
                onChange={handleChange}
            />
        </nav>
    );
}

export default Navbar;
