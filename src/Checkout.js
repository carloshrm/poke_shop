import React, { useContext } from "react";
import CartContext from "./CartContext";
import "./styles/Checkout.css";

function Checkout({ balance }) {
    const { cartItems, totalPrice, removeFromCart, changeQuantity } = useContext(CartContext);

    return (
        <div id="main_checkout_div">
            <h2>Checkout</h2>
            {cartItems.map((item, i) => (
                <div className="checkout_item_div" key={item.id}>
                    <img src={item.info.sprites.other["official-artwork"].front_default} alt="" />
                    <table>
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Amount</th>
                                <th>Unit Price</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>{item.info.name}</td>
                                <td>
                                    <input
                                        name="amount"
                                        type="number"
                                        min="1"
                                        max="99"
                                        value={item.quantity}
                                        onChange={(e) => changeQuantity(e, i)}
                                        />
                                </td>
                                <td>{item.quantity * item.info.base_experience}</td>
                                <td>
                                    <button onClick={() => removeFromCart(item.id)}>Remove</button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            ))}
            <table id="checkout_calc">
                <thead>
                    <tr>
                        <th>Your purchase: </th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Cost: </td>
                        <td>{totalPrice}</td>
                    </tr>
                    <tr>
                        <td>Current Balance:</td>
                        <td>{balance}</td>
                    </tr>
                    <tr>
                        <td>Total: </td>
                        <td id={balance - totalPrice >= 0 ? "total_ok" : "total_over"}>
                            {balance - totalPrice}
                        </td>
                    </tr>
                </tbody>
            </table>
            <button
                onClick={() => {
                    if (totalPrice > 0) {
                        if (balance - totalPrice > 0) {
                            alert(
                                "Oh no! All our Pokemon have managed to escape...Looks like you're just going to have to go catch'em after all!"
                            );
                        } else {
                            alert("You don't have enough funds.");
                        }
                    } else {
                        alert("Your cart is empty.");
                    }
                }}
            >
                Confirm
            </button>
        </div>
    );
}
export default Checkout;
