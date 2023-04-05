import {useDispatch} from 'react-redux';

import {orderActions} from '../../../../store';

import css from './ProductFormUpdate.module.sass';

const {changeProductInCart} = orderActions;

const ProductFormUpdate = ({id, value}) => {
    const dispatch = useDispatch();

    const addProducts = (e) => {
        e.preventDefault();

        const amount = +e.target.value;

        dispatch(changeProductInCart({product_id: id, amount}));
    }

    return (
        <form className={`${css['product-form']}`}>
            <label className={`card-heading`}>Quantity :
                <input type="number" min={1} max={100} defaultValue={value} name={'amount'} onChange={addProducts}/>
            </label>
        </form>
    );
};

export {ProductFormUpdate};