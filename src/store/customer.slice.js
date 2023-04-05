import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';

import {customerService} from '../services';

export const subscribeThunk = createAsyncThunk(
    'customers/subscription',
    async (customer, {dispatch}) => {
        try {
            const data = await customerService.subscribe(customer);

            if (data) {
                dispatch(setSubscribe())
            }
        } catch (e) {
            console.log(e.message);
        }
    }
);

const customerSlice = createSlice({
    name: 'createSlice',
    initialState: {subscribe: false},
    reducers: {
        setSubscribe: (state) => {
            state.subscribe = true
        }
    }
})

const customerReducer = customerSlice.reducer;

const {setSubscribe} = customerSlice.actions;

export default customerReducer;

export const customerActions = {setSubscribe};