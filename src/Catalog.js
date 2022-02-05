import React, { useEffect, useState } from "react";
import Pokepreview from "./Pokepreview";
import CatalogNav from "./CatalogNav";
import Pokemon from "./Pokemon";

import { fetchPokemon } from "./APIHelper";
import "./styles/Catalog.css";

function Catalog({ mainCatalog, cartSetter }) {
    const [localCat, setLocalCat] = useState([]);
    const [pageNumber, setPageNumber] = useState(1);
    const [viewDetails, detailsToggle] = useState({ display: false, selectionID: 0 });
    const [filterQuery, setFilterQuery] = useState("");

    const perPageAmmount = 3;
    let maxPages = Math.round(1 + mainCatalog.length / perPageAmmount);

    useEffect(() => {
        setLocalCat([]);
        let catalogSelection = mainCatalog.slice(
            pageNumber * perPageAmmount - perPageAmmount,
            pageNumber * perPageAmmount
        );
        fetchForLocalCatalog(catalogSelection);
    }, [mainCatalog, pageNumber]);

    async function fetchForLocalCatalog(selection) {
        for (const poke in selection) {
            let apiResults = await fetchPokemon(selection[poke]);
            if (apiResults.hit) await new Promise((resolve) => setTimeout(resolve, 250));
            setLocalCat((state) => [...state, apiResults.info]);
        }
    }

    function searchPokemon(e) {
        e.preventDefault();
        let filteredCatalog = mainCatalog.filter((item) => {
            return item.name.includes(filterQuery);
        });
        fetchForLocalCatalog(filteredCatalog);
    }

    return (
        <>
            <h1>catalog page{pageNumber}</h1>
            <form onSubmit={searchPokemon}>
                <input
                    type="text"
                    id="catalog_search_bar"
                    onChange={(e) => setFilterQuery(e.target.value.toLowerCase().trim())}
                    defaultValue={filterQuery}
                />
            </form>

            <div id="catalog_container">
                {viewDetails.display ? (
                    <Pokemon
                        info={localCat[viewDetails.selectionID]}
                        toggle={detailsToggle}
                        cartSetter={cartSetter}
                    />
                ) : (
                    <></>
                )}
                {localCat.map((entry, i) => {
                    if (entry.name.includes(filterQuery) || filterQuery === "")
                        return (
                            <div
                                className="poke_preview_div"
                                key={i}
                                onClick={() =>
                                    detailsToggle({
                                        display: !viewDetails.display,
                                        selectionID: i,
                                    })
                                }
                            >
                                <Pokepreview info={entry} />
                            </div>
                        );
                })}
            </div>
            <CatalogNav page={pageNumber} max={maxPages} flip={setPageNumber} />
        </>
    );
}

export default Catalog;
