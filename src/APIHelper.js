async function callApi() {
    const apiFetch = await fetch("https://pokeapi.co/api/v2/pokemon/?offset=0&limit=151");
    const apiResponse = await apiFetch.json();
    return apiResponse;
}

async function mainCatalogCache() {
    let data = undefined;
    if (localStorage.getItem("pokeData") === null) {
        data = await callApi();
        localStorage.setItem("pokeData", JSON.stringify(data.results));
        data = data.results;
    } else {
        data = JSON.parse(localStorage.getItem("pokeData"));
    }
    pokeDetailsCache(data);
    return data;
}

function pokeDetailsCache(data) {
    let details = {};
    if (data === undefined) {
        data = JSON.parse(localStorage.getItem("pokeData"));
    }
    if (localStorage.getItem("pokeDetails") === null || details === {}) {
        for (let i = 0; i < data.length; i++) {
            details[data[i].name] = { unset: true };
        }
        localStorage.setItem("pokeDetails", JSON.stringify(details));
    } else {
        details = JSON.parse(localStorage.getItem("pokeDetails"));
    }
}

async function fetchPokemon(pokemon) {
    let details = JSON.parse(localStorage.getItem("pokeDetails"));
    if (details[pokemon.name].unset) {
        const pokeBall = await fetch(pokemon.url);
        const caughtPokemon = await pokeBall.json();
        details[pokemon.name] = { ...selectPokemonData(caughtPokemon), unset: false };
        localStorage.setItem("pokeDetails", JSON.stringify(details));
        await new Promise((resolve) => setTimeout(resolve, 400));
        return { info: details[pokemon.name] };
    } else {
        return { info: details[pokemon.name] };
    }
}

function selectPokemonData(allPokemonData) {
    const detailFilter = [
        "base_experience",
        "height",
        "id",
        "name",
        "stats",
        "types",
        "weight",
        "sprites",
    ];
    let parsedData = Object.fromEntries(detailFilter.map((key) => [key, allPokemonData[key]]));
    return parsedData;
}

export { mainCatalogCache, fetchPokemon };
