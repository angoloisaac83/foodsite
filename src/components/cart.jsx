import React, { useContext } from 'react';
import { CartContext } from '../context/cartcontext';

const Cart = () => {
    const { cartItems } = useContext(CartContext);

    // Provide a default empty array in case cartItems is undefined
    const totalItems = (cartItems || []).reduce((sum, item) => sum + item.quantity, 0);

    return (
        <div className="cart">
            <h2>Your Cart</h2>
            <p>Total Items: {totalItems}</p>
            <ul>
                {(cartItems || []).map(item => (
                    <li key={item.id}>
                        {item.name} - Quantity: {item.quantity}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Cart;
