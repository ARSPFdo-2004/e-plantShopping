import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
    updateQuantity,
    addItem,
    removeItem
} from './CartSlice';

function CartItem({ onContinueShopping }) {
    const dispatch = useDispatch();

    // Get cart items from Redux
    const CartItems = useSelector((state) => state.cart.items);

    // Calculate total cart amount
    const calculateTotalAmount = () => {
        let total = 0;

        CartItems.forEach((item) => {
            const cost = parseFloat(item.cost.substring(1));
            total += cost * item.quantity;
        });

        return total;
    };

    // Calculate subtotal of one item
    const calculateTotalCost = (item) => {
        const cost = parseFloat(item.cost.substring(1));
        return cost * item.quantity;
    };

    // Increase quantity
    const handleIncrement = (item) => {
        dispatch(
            updateQuantity({
                name: item.name,
                quantity: item.quantity + 1
            })
        );
    };

    // Decrease quantity
    const handleDecrement = (item) => {
        if (item.quantity > 1) {
            dispatch(
                updateQuantity({
                    name: item.name,
                    quantity: item.quantity - 1
                })
            );
        } else {
            dispatch(removeItem(item.name));
        }
    };

    // Remove item completely
    const handleRemove = (item) => {
        dispatch(removeItem(item.name));
    };

    // Add an item again using addItem
    const handleAddAgain = (item) => {
        dispatch(
            addItem({
                name: item.name,
                image: item.image,
                cost: item.cost
            })
        );
    };

    const handleContinueShopping = (e) => {
        e.preventDefault();
        onContinueShopping(e);
    };

    const handleCheckoutShopping = (e) => {
        e.preventDefault();
        alert("Functionality to be added for future reference");
    };

    return (
        <div className="cart-container">
            <h2>Shopping Cart</h2>

            {CartItems.length === 0 ? (
                <div className="empty-cart">
                    <h3>Your cart is empty</h3>

                    <button
                        className="continue-shopping"
                        onClick={handleContinueShopping}
                    >
                        Continue Shopping
                    </button>
                </div>
            ) : (
                <>
                    {CartItems.map((item) => (
                        <div
                            className="cart-item"
                            key={item.name}
                        >
                            <img
                                src={item.image}
                                alt={item.name}
                                className="cart-item-image"
                            />

                            <div className="cart-item-details">
                                <h3>{item.name}</h3>

                                <p>
                                    Unit Price: {item.cost}
                                </p>

                                <div className="quantity-controls">
                                    <button
                                        onClick={() =>
                                            handleDecrement(item)
                                        }
                                    >
                                        -
                                    </button>

                                    <span>{item.quantity}</span>

                                    <button
                                        onClick={() =>
                                            handleIncrement(item)
                                        }
                                    >
                                        +
                                    </button>
                                </div>

                                <p>
                                    Subtotal: $
                                    {calculateTotalCost(item).toFixed(2)}
                                </p>

                                <button
                                    className="remove-button"
                                    onClick={() =>
                                        handleRemove(item)
                                    }
                                >
                                    Remove
                                </button>

                                <button
                                    className="add-again-button"
                                    onClick={() =>
                                        handleAddAgain(item)
                                    }
                                >
                                    Add Again
                                </button>
                            </div>
                        </div>
                    ))}

                    <div className="cart-total">
                        <h2>
                            Total: $
                            {calculateTotalAmount().toFixed(2)}
                        </h2>
                    </div>

                    <div className="cart-buttons">
                        <button
                            className="continue-shopping"
                            onClick={handleContinueShopping}
                        >
                            Continue Shopping
                        </button>

                        <button
                            className="checkout-button"
                            onClick={handleCheckoutShopping}
                        >
                            Checkout
                        </button>
                    </div>
                </>
            )}
        </div>
    );
}

export default CartItem;