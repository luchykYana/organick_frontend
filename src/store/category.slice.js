import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';

import {categoryService} from '../services';

const initialState = {
    categories: [],
    status: null,
    error: null
}

export const getAllCategoriesThunk = createAsyncThunk(
    'categories/getAllCategoriesThunk',
    async (_, {rejectWithValue}) => {
        try {
            const {data} = await categoryService.getAllCategories();

            return data;
        } catch (e) {
            return rejectWithValue(e.message);
        }
    }
);

const categorySlice = createSlice({
    name: 'categorySlice',
    initialState,
    reducers: {},
    extraReducers: {
        [getAllCategoriesThunk.pending]: (state) => {
            state.status = 'pending';
        },
        [getAllCategoriesThunk.fulfilled]: (state, action) => {
            state.status = 'fulfilled';
            state.categories = action.payload;
        },
        [getAllCategoriesThunk.rejected]: (state, action) => {
            state.status = 'rejected';
            state.error = action.payload;
        }
    }
});

const categoryReducer = categorySlice.reducer;

export default categoryReducer;