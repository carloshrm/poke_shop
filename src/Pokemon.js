import React, { useEffect } from "react";
import "./styles/Pokemon.css";

function Pokemon({ info, toggle, cartSetter }) {
    function toggleDisplay() {
        toggle((prev) => ({ ...prev, display: !prev.display }));
    }

    return (
        <div id="pokemon_details_container">
            <h1>{info.name}</h1>
            <img src={info.sprites.other["official-artwork"].front_default} alt="" />
            <button onClick={() => cartSetter(info)}>Add to cart</button>
            <button onClick={toggleDisplay}>Back</button>
        </div>
    );
}

export default Pokemon;
