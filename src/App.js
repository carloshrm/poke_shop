// React
import React, { useEffect, useState } from "react";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
// Local Modules
import About from "./About";
import Cart from "./Cart";
import Catalog from "./Catalog";
import Checkout from "./Checkout";
import Home from "./Home";
import Navbar from "./Navbar";
import { mainCatalogCache } from "./APIHelper";
// CSS styles
import "./styles/Home.css";

function App() {
    const [catalogData, setCatalogData] = useState([]);
    const [cartVisibility, showCart] = useState(false);
    const [shoppingCart, setShoppingCart] = useState([]);
    const [totalPrice, setTotalPrice] = useState(0);
    const [userBalance, setBalance] = useState(800);

    // show user data on navbar, implement showing/hiding cart tab
    // start CSS styling

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
        let calculatedTotal = 0;
        shoppingCart.forEach((poke) => {
            calculatedTotal += poke.info.base_experience * poke.quantity;
        });
        setTotalPrice(calculatedTotal);
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
                <Cart
                    cartItems={shoppingCart}
                    cartSetter={setShoppingCart}
                    balance={userBalance}
                    totalPrice={totalPrice}
                />
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
                    <Route exact path="/checkout">
                        <Checkout
                            cartItems={shoppingCart}
                            cartSetter={setShoppingCart}
                            balance={userBalance}
                            totalPrice={totalPrice}
                        />
                    </Route>
                </Switch>
            </div>
        </Router>
    );
}

export default App;
