// React
import React, { useEffect, useState } from "react";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
// Local Modules
import About from "./About";
import Catalog from "./Catalog";
import Navbar from "./Navbar";
import Home from "./Home";
import Cart from "./Cart";
import { mainCatalogCache } from "./APIHelper";
// CSS styles
import "./styles/Home.css";

function App() {
    const [catalogData, setCatalogData] = useState([]);
    const [shoppingCart, setShoppingCart] = useState([]);

    useEffect(() => {
        (async () => {
            let fetch = await mainCatalogCache();
            setCatalogData(fetch);
        })();
        let localCart = localStorage.getItem("pokeCart");
        if (localCart) {
            setShoppingCart(JSON.parse(localCart));
        }
    }, []);

    useEffect(() => {
        localStorage.setItem("pokeCart", JSON.stringify(shoppingCart));
    }, [shoppingCart]);

    function addToCart(pokemonInfo) {
        for (const cartItem in shoppingCart) {
            if (shoppingCart[cartItem].id === pokemonInfo.id) {
                let newCart = shoppingCart;
                newCart[cartItem].quantity++;
                setShoppingCart([...newCart]);
                return;
            }
        }
        let newCartItem = { id: pokemonInfo.id, info: pokemonInfo, quantity: 1 };
        setShoppingCart([...shoppingCart, newCartItem]);
    }

    return (
        <Router>
            <div className="Home">
                <Navbar />
                <Cart cartItems={shoppingCart} cartSetter={setShoppingCart} />
                <Switch>
                    <Route exact path="/">
                        <Home />
                    </Route>
                    <Route exact path="/aboutus">
                        <About />
                    </Route>
                    <Route exact path="/catalog">
                        <Catalog mainCatalog={catalogData} cartSetter={addToCart} />
                    </Route>
                </Switch>
            </div>
        </Router>
    );
}

export default App;
