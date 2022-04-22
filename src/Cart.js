import React, { useContext } from "react";
import { Link } from "react-router-dom";
import CartContext from "./CartContext";
import { BsCart2, BsCartFill } from "react-icons/bs";
import "./styles/Cart.css";

function Cart() {
    const {
        cartItems,
        changeQuantity,
        removeFromCart,
        totalPrice,
        setCartVisibility,
        cartVisibility,
    } = useContext(CartContext);

    return (
        <div id="shopping_cart_div" className={cartVisibility ? "show_cart" : "hide_cart"}>
            <div id="cart_tab" onClick={setCartVisibility}>
                {cartItems.length == 0 ? <BsCart2 /> : <BsCartFill />}
                {cartVisibility ? "HIDE" : "SHOW"}
            </div>
            <h3>Your Cart: </h3>
            <ul>
                {cartItems.map((item, i) => (
                    <li key={item.id}>
                        <label htmlFor="amount">
                            {item.info.name[0].toUpperCase() + item.info.name.substring(1) + ": "}
                        </label>
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
