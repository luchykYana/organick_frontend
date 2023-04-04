import {useSelector} from 'react-redux';
import {useState} from 'react';

import {ProductItem} from './ProductItem/ProductItem';
import {TotalAmount} from './TotalAmount/TotalAmount';
import {OrderForm} from '../OrderForm/OrderForm';
import {Button} from '../../Button/Button';

import css from './OrderList.module.sass';

const OrderList = () => {
    const {cart} = useSelector(store => store.orderReducer);
    const [trigger, setTrigger] = useState(false);

    const changeTrigger = () => setTrigger(!trigger);

    return (
        <section className={`grid-container ${css['order-list']}`}>
            <div className={`grid-content`}>
                {cart.length > 0 && cart.map(p => <ProductItem key={p.product_id} item={p}/>)}
                {cart.length < 1 &&
                    <div className={css['order-list__text']}>
                        The cart is empty. <br/> But it's never too late to fix it :)
                    </div>}
                <div className={css['order-list__total-amount']}>{cart.length > 0 && <TotalAmount/>}</div>
                {(cart.length > 0 && !trigger) && <div className={css['order-list__btn']}>
                    <Button text={'To order'} btnClass={'info--blue'} arrow={true} click={changeTrigger}/>
                </div>}
                {(cart.length > 0 && trigger) && <OrderForm/>}
            </div>
        </section>
    );
};

export {OrderList};