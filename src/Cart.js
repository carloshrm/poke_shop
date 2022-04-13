import React, { useContext } from "react";
import { Link } from "react-router-dom";
import CartContext from "./CartContext";
import "./styles/Cart.css";

function Cart({ balance, visibility }) {
    const { cartItems, changeQuantity, removeFromCart, totalPrice } = useContext(CartContext);

    return (
        <div id="shopping_cart_div">
            <h3>User balance: {balance}</h3>
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
            <Link to="/checkout">Checkout</Link>
        </div>
    );
}
export default Cart;
