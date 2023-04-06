import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';

import {orderService} from '../services';

const initialState = {
    cart: [],
    price: 0,
    discount: 0
}

export const createOrderThunk = createAsyncThunk(
    'orders/createOrder',
    async (newOrder, {dispatch}) => {
        try {
            const data = await orderService.create(newOrder);

            if(data) {
                dispatch(cleanCart());
            }
        } catch (e) {
            console.log(e.message);
        }
    }
);

const orderSlice = createSlice({
    name: 'createSlice',
    initialState,
    reducers: {
        addProductToCart: (state, action) => {
            if (state.cart.length < 1) {
                state.cart.push(action.payload)
            } else {
                const index = state.cart.findIndex(e => e.product_id === action.payload.product_id);

                if (index >= 0) {
                    state.cart[index].amount += action.payload.amount;
                } else {
                    state.cart.push(action.payload);
                }
            }
        },
        changeProductInCart: (state, action) => {
            const index = state.cart.findIndex(e => e.product_id === action.payload.product_id);

            if (index >= 0) {
                state.cart[index].amount = action.payload.amount;
            } else {
                state.cart.push(action.payload);
            }
        },
        deleteProductFromCart: (state, action) => {
            const index = state.cart.findIndex(e => e.product_id === action.payload.product_id);

            if (index >= 0) {
                state.cart.splice(index, 1);
            }
        },
        savePriceAndDiscount: (state, action) => {
            state.price = action.payload.price;
            state.discount = action.payload.discount;
        },
        cleanCart: (state) => {
            state.cart = [];
            state.price = 0;
            state.discount = 0;
        }
    }
})

const orderReducer = orderSlice.reducer;

const {
    addProductToCart, changeProductInCart, deleteProductFromCart, savePriceAndDiscount, cleanCart,
} = orderSlice.actions;

export default orderReducer;

export const orderActions = {
    addProductToCart, changeProductInCart, deleteProductFromCart, savePriceAndDiscount, cleanCart
};