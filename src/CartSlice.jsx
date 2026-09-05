import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    items: []
};

const cartSlice = createSlice({
    name: 'cart',

    initialState,

    reducers: {
        // Add product to cart
        addItem: (state, action) => {
            const { name, image, cost } = action.payload;

            const existingItem = state.items.find(
                item => item.name === name
            );

            if (existingItem) {
                existingItem.quantity++;
            } else {
                state.items.push({
                    name,
                    image,
                    cost,
                    quantity: 1
                });
            }
        },

        // Remove product completely
        removeItem: (state, action) => {
            state.items = state.items.filter(
                item => item.name !== action.payload
            );
        },

        // Update quantity
        updateQuantity: (state, action) => {
            const { name, quantity } = action.payload;

            const itemToUpdate = state.items.find(
                item => item.name === name
            );

            if (itemToUpdate) {
                itemToUpdate.quantity = quantity;
            }
        }
    }
});

export const {
    addItem,
    removeItem,
    updateQuantity
} = cartSlice.actions;

export default cartSlice.reducer;