import React from "react";
import { Link } from "react-router-dom";

function Home() {
    return (
        <div>
            <h1>Welcome to</h1>
            <span className="logo_style">PokeShop!</span>
            <h2>All your pokemon needs in a single store.</h2>
            <h2>
                Because why catch when you can just <b>buy 'em all!</b>
            </h2>

            <h6>
                (This website is a non-comercial parody, we don't actually sell anything related to
                pokemon!)
            </h6>
            <h3>
                <Link to="/catalog">Start Browsing!</Link>
            </h3>
        </div>
    );
}

export default Home;
