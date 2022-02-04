import React, { useEffect } from "react";
import "./styles/Pokemon.css";

function Pokemon({ info, toggle, cartSetter }) {
    useEffect(() => {});

    function toggleDisplay() {
        toggle((prev) => ({ ...prev, display: !prev.display }));
    }

    return (
        <div id="main_pokemon_div">
            <h1>{info.name}</h1>
            <img src={info.sprites.other["official-artwork"].front_default} alt="" />
            <button onClick={() => cartSetter(info)}>Add to cart</button>
            <button onClick={toggleDisplay}>Back</button>
        </div>
    );
}

export default Pokemon;
