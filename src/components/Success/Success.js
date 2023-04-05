import {useSelector} from 'react-redux';
import {useEffect, useState} from 'react';

import css from './Success.module.sass';

const Success = () => {
    const {cart} = useSelector(state => state.orderReducer);
    const [text, setText] = useState('Thank you for your order =)');

    useEffect(() => {
        cart.length > 0
            ? setText('Sorry, something goes wrong =( Try again or contact with support service')
            : setText('Thank you for your order =)');
    }, [cart])

    return (
        <div className={css.success}>
            <h1 className={`heading-h1`}>{text}</h1>
            <div className={css['success__image']}></div>
        </div>
    );
};

export {Success};