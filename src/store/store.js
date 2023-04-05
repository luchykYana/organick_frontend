import {configureStore} from '@reduxjs/toolkit';

import customerReducer from './customer.slice';
import categoryReducer from './category.slice';
import productReducer from './product.slice';
import orderReducer from './order.slice';

const store = configureStore({
    reducer: {
        productReducer,
        categoryReducer,
        orderReducer,
        customerReducer
    }
});

export {store};