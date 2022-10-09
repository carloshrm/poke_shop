import { Link, useLocation } from "react-router-dom";
import React from "react";

import { MdHome, MdInfoOutline, MdBook } from "react-icons/md";

import "./styles/Navbar.css";

function Navbar() {
    let currentLoc = useLocation().pathname;
    return (
        <nav id="navbar">
            <h2 id="nav_title">PokeShop!</h2>
            <ul className="navlinks">
                <li className={currentLoc.includes("poke_shop") ? "current_nav" : ""}>
                    <MdHome />
                    <Link to="/poke_shop">Home</Link>
                </li>
                <li className={currentLoc.includes("aboutus") ? "current_nav" : ""}>
                    <MdInfoOutline />
                    <Link to="/aboutus">About</Link>
                </li>
                <li className={currentLoc.includes("catalog") ? "current_nav" : ""}>
                    <MdBook />
                    <Link to="/catalog">Catalog</Link>
                </li>
            </ul>
        </nav>
    );
}

export default Navbar;
