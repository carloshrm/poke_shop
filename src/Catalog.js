import React, { useEffect, useState } from "react";
import Pokepreview from "./Pokepreview";
import CatalogNav from "./CatalogNav";
import Pokemon from "./Pokemon";

import { fetchPokemon } from "./APIHelper";

import "./styles/Catalog.css";

function Catalog({ mainCatalog }) {
    const [localCat, setLocalCat] = useState([]);
    const [pageNumber, setPageNumber] = useState(1);
    const [viewDetails, detailsToggle] = useState({ display: false, selectionID: 0 });
    const [filterQuery, setFilterQuery] = useState("");

    const perPageAmmount = 4;
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

    function dismissDetails(e) {
        if (e.target.offsetParent.id.includes("pokemon") || viewDetails.display === false) return;
        detailsToggle({ ...viewDetails, display: !viewDetails.display });
    }

    return (
        <>
            <h4>
                Search:
                <form onSubmit={searchPokemon}>
                    <input
                        type="text"
                        id="catalog_search_bar"
                        onChange={(e) => setFilterQuery(e.target.value.toLowerCase().trim())}
                        defaultValue={filterQuery}
                    />
                </form>
            </h4>

            <div id="catalog_container" onClick={dismissDetails}>
                {viewDetails.display ? (
                    <Pokemon info={localCat[viewDetails.selectionID]} toggle={detailsToggle} />
                ) : (
                    <></>
                )}
                {localCat.map((entry, i) => {
                    if (entry.name.includes(filterQuery) || filterQuery === "")
                        return (
                            <div
                                className="poke_preview_div"
                                key={i}
                                onClick={(e) => {
                                    e.stopPropagation();
                                    detailsToggle({
                                        display: !viewDetails.display,
                                        selectionID: i,
                                    });
                                }}
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
