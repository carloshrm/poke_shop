import React from "react";

function About() {
    return (
        <>
            <h2>About us</h2>
            <p>
                This is a fan-made non-comercial parody website created as a programming exercise
                involving React and online shopping systems. We don't actually sell anything!
            </p>
            <p>
                You can check out the source at{" "}
                <a href="https://github.com/carloshrm/poke_shop"></a>
            </p>
            <p>
                Pokemon and all Pokemon related images and content are a{" "}
                <a href="https://www.pokemon.com/us/legal/">Nintendo</a> Trademark. Content fetched
                from <a href="https://pokeapi.co/">PokeAPI.</a>
            </p>
        </>
    );
}

export default About;
