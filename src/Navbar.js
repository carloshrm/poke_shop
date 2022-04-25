import { Link } from "react-router-dom";
import React from "react";

import { MdHome, MdInfoOutline, MdBook } from "react-icons/md";

import "./styles/Navbar.css";

function Navbar() {
    return (
        <nav id="navbar">
            <h2>PokeShop!</h2>
            <ul className="navlinks">
                <li>
                    <MdHome />
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <MdInfoOutline />
                    <Link to="/aboutus">About</Link>
                </li>
                <li>
                    <MdBook />
                    <Link to="/catalog">Dex</Link>
                </li>
            </ul>
        </nav>
    );
}

export default Navbar;
