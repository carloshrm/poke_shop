import React from "react";
import "./styles/Pokepreview.css";

function Pokepreview({ info }) {
    return (
        <div className="poke_preview">
            <h1>{info.name[0].toUpperCase() + info.name.substring(1)}</h1>
            <img src={info.sprites.front_default} alt="" />
        </div>
    );
}

export default Pokepreview;
