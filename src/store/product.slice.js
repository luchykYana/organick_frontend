import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';

import {productService} from '../services';

const initialState = {
    products: [],
    productId: null,
    status: null,
    error: null
}

export const getAllProductsThunk = createAsyncThunk(
    'products/getAllProductsThunk',
    async (_, {rejectWithValue}) => {
        try {
            const {data} = await productService.getAllProducts();

            return data;
        } catch (e) {
            return rejectWithValue(e.message);
        }
    }
);

const productSlice = createSlice({
    name: 'productSlice',
    initialState,
    reducers: {
        productForMore: (state, action) => {
            state.productId = action.payload.product;
        },
        cleanProductForMore: (state, action) => {
            state.productId = null;
        }
    },
    extraReducers: {
        [getAllProductsThunk.pending]: (state) => {
            state.status = 'pending';
        },
        [getAllProductsThunk.fulfilled]: (state, action) => {
            state.status = 'fulfilled';
            state.products = action.payload.sort((a, b) => b.discount - a.discount);
        },
        [getAllProductsThunk.rejected]: (state, action) => {
            state.status = 'rejected';
            state.error = action.payload;
        }
    }
});

const productReducer = productSlice.reducer;
const {productForMore, cleanProductForMore} = productSlice.actions;

export default productReducer;

export const productActions = {
    productForMore,
    cleanProductForMore
};