import {useNavigate} from 'react-router-dom';
import {useEffect, useState} from 'react';
import {useSelector} from 'react-redux';

import css from './Cart.module.sass';

const Cart = () => {
    const {cart} = useSelector(state => state.orderReducer);
    const [number, setNumber] = useState(0);
    const [red, setRed] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        console.log(cart)
        if (cart.length > 0) {
            const sumOfProducts = cart.reduce((acc, val) => acc + val.amount, 0);
            setNumber(sumOfProducts);
            setRed('red');
        } else {
            setNumber(0);
            setRed('');
        }
    }, [cart]);

    const toOrderPage = () => navigate('order', {replace: true});

    return (
        <div className={css.cart} onClick={toOrderPage}>
            <div className={css['cart__image']}></div>
            <div className={css['cart__text']}>Cart <span className={css[red]}>({number})</span></div>
        </div>
    );
};

export {Cart};