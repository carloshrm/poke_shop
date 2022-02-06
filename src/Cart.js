import React, { useEffect, useState } from "react";
import "./styles/Cart.css";

function Cart({ cartItems, cartSetter }) {
    function removeFromCart(id) {
        let filteredCart = cartItems.filter((po) => po.id !== id);
        cartSetter(filteredCart);
    }

    function changeQuantity(e, index) {
        let newCart = cartItems;
        cartItems[index].quantity = parseInt(e.target.value);
        cartSetter([...newCart]);
    }

    return (
        <div id="shopping_cart_div">
            <h3>Your Cart: </h3>
            <ul>
                {cartItems.map((item, i) => (
                    <div key={item.id}>
                        <li>{item.info.name}</li>
                        <input
                            type="number"
                            min="1"
                            max="99"
                            value={item.quantity}
                            onChange={(e) => changeQuantity(e, i)}
                        />
                        <button onClick={() => removeFromCart(item.id)}>Remove</button>
                        <p>Price: {item.info.base_experience * item.quantity}</p>
                    </div>
                ))}
            </ul>
        </div>
    );
}
export default Cart;
