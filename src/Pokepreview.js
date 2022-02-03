import React from "react";
import "./styles/Pokepreview.css";

function Pokepreview({ info }) {
    return (
        <>
            <h1>{info.name}</h1>
            <img src={info.sprites.front_default} alt="" />
        </>
    );
}

export default Pokepreview;
