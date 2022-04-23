import React, { useContext, useEffect } from "react";
import CartContext from "./CartContext";
import icons from "./PokeIcons";

import "./styles/Pokemon.css";

function Pokemon({ info, toggle }) {
    const { addToCart } = useContext(CartContext);
    function toggleDisplay() {
        toggle((prev) => ({ ...prev, display: !prev.display }));
    }

    return (
        <div id="pokemon_details_container">
            <h1>{info.name[0].toUpperCase() + info.name.substring(1)}</h1>
            {info.types.map((t) => (
                <img src={icons[t.type.name]} alt="" />
            ))}
            <img src={info.sprites.other["official-artwork"].front_default} alt="" />
            <p id="pokemon_main_stats">
                Weight:{" "}
                {info.weight * 100 > 1000 ? info.weight / 10 + "Kg" : info.weight * 100 + "g"}
                Number: {info.id}
                Height: {info.height * 10}cm
            </p>
            <table id="pokemon_detailed_stats">
                <tbody>
                    {info.stats.map((unit, i) => (
                        <tr key={"row" + i}>
                            <td>{unit.stat.name}</td>
                            <td>{unit.base_stat}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <div id="pokemon_buttons">
                <button onClick={() => addToCart(info)}>Add to cart</button>
                <button onClick={toggleDisplay}>Back</button>
            </div>
        </div>
    );
}

export default Pokemon;
