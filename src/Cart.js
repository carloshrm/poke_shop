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
        <aside id="shopping_cart_div">
            <div id="cart_tab" onClick={setCartVisibility}>
                {cartItems.length === 0 ? <BsCart2 /> : <BsCartFill />}
                {cartVisibility ? "Hide Cart" : "Show Cart"}
            </div>
            <div id="cart_contents" className={cartVisibility ? "show_cart" : "hide_cart"}>
                <h3>Your Cart: </h3>
                <ul>
                    {cartItems.map((item, i) => (
                        <li className="cart_item" key={item.id}>
                            <label htmlFor="amount">
                                {item.info.name[0].toUpperCase() +
                                    item.info.name.substring(1) +
                                    ": "}
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
                            <p>Subtotal: ${(item.info.base_experience * item.quantity).toFixed(2)}</p>
                        </li>
                    ))}
                </ul>
                <p>Total: ${totalPrice.toFixed(2)}</p>
                <Link to="/checkout">Checkout</Link>
            </div>
        </aside>
    );
}
export default Cart;
