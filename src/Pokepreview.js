import React from "react";
import "./styles/Pokepreview.css";

function Pokepreview({ info }) {
    return (
        <div>
            <h2>{"#" + info.id + " " + info.name[0].toUpperCase() + info.name.substring(1)}</h2>
            <img src={info.sprites.front_default} alt="" />
        </div>
    );
}

export default Pokepreview;
