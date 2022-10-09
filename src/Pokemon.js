import React, { useContext } from "react";
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
            <div id="type_icons">
                {info.types.map((t, i) => (
                    <div className="icon_c" key={i}>
                        <span>{t.type.name}</span>
                        <img  src={icons[t.type.name]} alt={t.type.name} />
                    </div>
                ))}
            </div>
            <img src={info.sprites.other["official-artwork"].front_default} alt="pokemon art" />
            <table id="pokemon_base_stats">
                <tbody>
                    <tr>
                        <td>{"Number: " + info.id}</td>
                        <td>
                            {"Weight: "}
                            {info.weight * 100 > 1000
                                ? info.weight / 10 + " Kg."
                                : info.weight * 100 + " g."}
                        </td>
                        <td>{"Height: " + info.height / 10 + " m."}</td>
                    </tr>
                </tbody>
            </table>
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
                <button onClick={toggleDisplay}>Close</button>
            </div>
        </div>
    );
}

export default Pokemon;
