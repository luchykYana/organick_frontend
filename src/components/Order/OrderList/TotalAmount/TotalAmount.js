import {useDispatch, useSelector} from 'react-redux';
import {useEffect, useState} from 'react';

import {orderActions} from '../../../../store';

const {savePriceAndDiscount} = orderActions;

const TotalAmount = () => {
    const {products} = useSelector(state => state.productReducer);
    const {cart} = useSelector(state => state.orderReducer);
    const [totalCost, setTotalCost] = useState(0);
    const [totalDiscount, setTotalDiscount] = useState(0);
    const dispatch = useDispatch();

    useEffect(() => {
        const {totalCost, totalDiscount} = cart.reduce((acc, val) => {
                const {price, discount} = products.find(p => p.id === val.product_id);

                const allPrice = price * val.amount;
                const currentDiscount = allPrice / 100 * discount;

                acc.totalCost += allPrice - currentDiscount;
                acc.totalDiscount += currentDiscount;

                return acc;
            }, {totalCost: 0, totalDiscount: 0}
        );

        setTotalCost(parseInt(totalCost));
        setTotalDiscount(parseInt(totalDiscount));
        dispatch(savePriceAndDiscount({price: parseInt(totalCost), discount: parseInt(totalDiscount)}));
    }, [cart, dispatch, products]);


    return (
        <div>
            <h3 className={`heading-h3`}>Total Cost: ${totalCost}</h3>
            <h3 className={`heading-h3`}>Discount: ${totalDiscount}</h3>
        </div>
    );
};

export {TotalAmount};