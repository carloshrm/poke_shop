import React, { useEffect, useState } from "react";
import "./styles/Cart.css";

function Cart({ cartItems, cartSetter }) {
    const [totalPrice, setTotalPrice] = useState(0);
    function removeFromCart(id) {
        let filteredCart = cartItems.filter((po) => po.id !== id);
        cartSetter(filteredCart);
    }

    function changeQuantity(e, index) {
        let newCart = cartItems;
        cartItems[index].quantity = parseInt(e.target.value);
        cartSetter([...newCart]);
    }

    useEffect(() => {
        let calculatedTotal = 0;
        cartItems.forEach((poke) => {
            calculatedTotal += poke.info.base_experience * poke.quantity;
        });
        setTotalPrice(calculatedTotal);
    });

    return (
        <div id="shopping_cart_div">
            <h3>Your Cart: </h3>
            <ul>
                {cartItems.map((item, i) => (
                    <li key={item.id}>
                        <p>{item.info.name}</p>
                        <label htmlFor="amount">Amount: </label>
                        <input
                            name="amount"
                            type="number"
                            min="1"
                            max="99"
                            value={item.quantity}
                            onChange={(e) => changeQuantity(e, i)}
                        />
                        <button onClick={() => removeFromCart(item.id)}>Remove</button>
                        <p>Subtotal: {item.info.base_experience * item.quantity}</p>
                    </li>
                ))}
            </ul>
            <p>Total Price: {totalPrice}</p>
        </div>
    );
}
export default Cart;
