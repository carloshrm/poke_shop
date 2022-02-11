import React, { useEffect, useState } from "react";
import PokePreview from "./Pokepreview";

function Checkout({ cartItems, cartSetter, balance }) {
    // show cart items, price per item, quantity, total
    // balance math and error checking
    // figure out where to put finished order
    function removeFromCart(id) {
        let filteredCart = cartItems.filter((po) => po.id !== id);
        cartSetter(filteredCart);
    }

    return (
        <div>
            <h2>Checkout</h2>
            <ul>
                {cartItems.map((item, i) => (
                    <li key={item.id}>
                        <PokePreview info={item} />
                        <label htmlFor="amount">Amount: </label>
                        <input
                            name="amount"
                            type="number"
                            min="1"
                            max="99"
                            value={item.quantity}
                            onChange={(e) => changeQuantity(e, i)}
                        />
                        <p>Price: {item.info.base_experience}</p>
                        <button onClick={() => removeFromCart(item.id)}>Remove</button>
                        <p>Subtotal: {item.info.base_experience * item.quantity}</p>
                    </li>
                ))}
            </ul>
            <p>Total Cost: {totalPrice}</p>
            <p>Current Balance: {balance}</p>
            <button>Checkout</button>
        </div>
    );
}

export default Checkout;
