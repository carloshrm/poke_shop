// React
import React, { useContext, useEffect, useState } from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
// Local Modules
import About from "./About";
import Cart from "./Cart";
import Catalog from "./Catalog";
import Checkout from "./Checkout";
import Home from "./Home";
import Navbar from "./Navbar";
// API
import { mainCatalogCache } from "./APIHelper";
// CSS styles
import "./styles/Home.css";
//Context
import { CartProvider } from "./CartContext";

function App() {
    const [catalogData, setCatalogData] = useState([]);
    const [userBalance, setBalance] = useState(800);
    // todo - start CSS styling
    // todo - fix html errors in checkout

    useEffect(() => {
        (async () => {
            let fetch = await mainCatalogCache();
            setCatalogData(fetch);
        })();
    }, []);

    return (
        <Router>
            <CartProvider>
                <div className="Home">
                    <Navbar />
                    <Cart balance={userBalance} />
                    <Routes>
                        <Route exact path="/" element={<Home />} />
                        <Route exact path="/aboutus" element={<About />} />
                        <Route
                            exact
                            path="/catalog"
                            element={<Catalog mainCatalog={catalogData} />}
                        />
                        <Route
                            exact
                            path="/checkout"
                            element={<Checkout balance={userBalance} />}
                        />
                    </Routes>
                </div>
            </CartProvider>
        </Router>
    );
}

export default App;
