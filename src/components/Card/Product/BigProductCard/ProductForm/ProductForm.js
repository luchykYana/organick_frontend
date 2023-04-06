import {useDispatch} from 'react-redux';

import {orderActions} from '../../../../../store';
import {Button} from '../../../../Button/Button';

import css from './ProductForm.module.sass';

const {addProductToCart} = orderActions;

const ProductForm = ({id, value}) => {
    const dispatch = useDispatch();

    const addProducts = (e) => {
        e.preventDefault();

        const amount = +e.target.amount.value;

        dispatch(addProductToCart({product_id: id, amount}));
    }

    return (
        <form className={`${css['product-form']}`} onSubmit={addProducts}>
            <label className={`card-heading`}><span>Quantity :</span>
                <input type="number" min={1} max={100} defaultValue={value} name={'amount'}/>
            </label>
            <Button text={'Add To Cart'} btnClass={'info--blue'} arrow={true}/>
        </form>
    );
};

export {ProductForm};