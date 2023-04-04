import {configureStore} from '@reduxjs/toolkit';

import productReducer from './product.slice';
import categoryReducer from './category.slice';
import orderReducer from './order.slice';

const store = configureStore({
    reducer: {
        productReducer,
        categoryReducer,
        orderReducer
    }
});

export {store};