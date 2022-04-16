import { Link } from "react-router-dom";
import React from "react";

import "./styles/Navbar.css";

function Navbar() {
    return (
        <nav className="navbar">
            <h2>PokeShop!</h2>
            <ul className="navlinks">
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/aboutus">About</Link>
                </li>
                <li>
                    <Link to="/catalog">Catalog</Link>
                </li>
            </ul>
        </nav>
    );
}

export default Navbar;
