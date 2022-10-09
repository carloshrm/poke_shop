import React from "react";
function CatalogNav({ page, max, flip }) {
    function flipPageContents(direction) {
        if (direction) {
            flip(page + 1 >= max ? max : page + 1);
        } else {
            flip(page - 1 < 1 ? 1 : page - 1);
        }
    }

    return (
        <div className="catNavButtons">
            <button onClick={() => flipPageContents(false)}>back</button>
            {new Array(max).fill().map((each, i) =>
                i + 1 === page ? (
                    <h3 className="active_cat_nav" key={i}>{i + 1}</h3>
                ) : (
                    <p key={i} onClick={() => flip(i + 1)}>
                        {i + 1}
                    </p>
                )
            )}
            <button onClick={() => flipPageContents(true)}>next</button>
        </div>
    );
}

export default CatalogNav;
