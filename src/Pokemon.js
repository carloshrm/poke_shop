import React, { useContext, useEffect } from "react";
import CartContext from "./CartContext";
import TypeIcons from "./PokeIcons";

import "./styles/Pokemon.css";

function Pokemon({ info, toggle }) {
    const { addToCart } = useContext(CartContext);
    function toggleDisplay() {
        toggle((prev) => ({ ...prev, display: !prev.display }));
    }
    return (
        <div id="pokemon_details_container">
            <h1>{info.name[0].toUpperCase() + info.name.substring(1) + "."}</h1>
            <img src={info.sprites.other["official-artwork"].front_default} alt="" />
            <div>
                <p>Number: {info.id}</p>
                <p>
                    Weight:{" "}
                    {info.weight * 100 > 1000 ? info.weight / 10 + "Kg" : info.weight * 100 + "g"}.
                </p>
                <p>Height: {info.height * 10}cm.</p>
                <table id="pokemon_stats_table">
                    <thead>
                        <tr>
                            <td>Stat</td>
                            <td>Value</td>
                        </tr>
                    </thead>
                    <tbody>
                        {info.stats.map((unit, i) => (
                            <tr key={"row" + i}>
                                <td>{unit.stat.name}</td>
                                <td>{unit.base_stat}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            <button onClick={() => addToCart(info)}>Add to cart</button>
            <button onClick={toggleDisplay}>Back</button>
        </div>
    );
}

export default Pokemon;
