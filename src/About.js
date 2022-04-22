import React from "react";

function About() {
    return (
        <>
            <h2>About us</h2>
            <p>
                This is a fan-made <b>non-comercial parody</b> website created as a programming
                exercise involving React and online shopping systems. We don't actually sell
                anything!
            </p>
            <p>
                You can check out the source at{" "}
                <a href="https://github.com/carloshrm/poke_shop">Github</a>
            </p>
            <p>
                Pokemon and all Pokemon related images and content are a{" "}
                <a href="https://www.pokemon.com/us/legal/">Nintendo</a> Trademark.{" "}
            </p>
            <p>
                Pokemon data fetched from <a href="https://pokeapi.co/">PokeAPI</a>.
            </p>
            <p>
                Type icons from{" "}
                <a href="https://commons.wikimedia.org/wiki/Category:Pok%C3%A9mon_types_icons">
                    WikiMedia
                </a>
            </p>
        </>
    );
}

export default About;
