import React, { createContext, useState, useEffect } from "react";

const CartContext = createContext();
export function CartProvider({ children }) {
    const [cartItems, setCart] = useState([]);
    const [cartVisibility, showCart] = useState(false);
    const [totalPrice, setTotalPrice] = useState(0);

    function setCartVisibility() {
        showCart(() => !cartVisibility);
    }
    function addToCart(pokemonInfo) {
        for (const item in cartItems) {
            if (cartItems[item].id === pokemonInfo.id) {
                let newCart = cartItems;
                newCart[item].quantity++;
                setCart([...newCart]);
                return;
            }
        }
        let newCartItem = { id: pokemonInfo.id, info: pokemonInfo, quantity: 1 };
        setCart([...cartItems, newCartItem]);
    }
    function removeFromCart(id) {
        let filteredCart = cartItems.filter((po) => po.id !== id);
        setCart(filteredCart);
    }
    function changeQuantity(e, index) {
        let newCart = cartItems;
        cartItems[index].quantity = parseInt(e.target.value);
        setCart([...newCart]);
    }
    useEffect(() => {
        let localCart = localStorage.getItem("pokeCart");
        if (localCart) {
            setCart(JSON.parse(localCart));
        }
    }, []);
    useEffect(() => {
        localStorage.setItem("pokeCart", JSON.stringify(cartItems));
        let calculatedTotal = 0;
        cartItems.forEach((poke) => {
            calculatedTotal += poke.info.base_experience * poke.quantity;
        });
        setTotalPrice(calculatedTotal);
    }, [cartItems]);

    return (
        <CartContext.Provider
            value={{
                cartItems,
                addToCart,
                setCart,
                removeFromCart,
                changeQuantity,
                setCartVisibility,
                cartVisibility,
                totalPrice,
            }}
        >
            {children}
        </CartContext.Provider>
    );
}

export default CartContext;
