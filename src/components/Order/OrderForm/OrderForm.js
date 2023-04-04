import {useDispatch, useSelector} from 'react-redux';
import {joiResolver} from '@hookform/resolvers/joi';
import {useNavigate} from 'react-router-dom';
import {useForm} from 'react-hook-form';

import {CustomerValidator} from '../../../validators';
import {createOrderThunk} from '../../../store';
import {Button} from '../../Button/Button';

import css from './OrderForm.module.sass';

const OrderForm = () => {
    const {cart, price, discount} = useSelector(state => state.orderReducer);
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const {
        handleSubmit, register, formState: {errors}, reset
    } = useForm({resolver: joiResolver(CustomerValidator), mode: 'onTouched'});

    const successOrder = () => navigate('/success', {replace: true});

    const submit = (data) => {
        const obj = {
            customer_info: data,
            order_info: {
                price: price,
                discount: discount,
                cart: cart
            }
        }
        dispatch(createOrderThunk(obj));
        successOrder();
        reset();
    }

    return (
        <form onSubmit={handleSubmit(submit)} className={css['order-form']}>
            <div className={css['order-form__section']}>
                <div className={css['order-form__section__field']}>
                    <label htmlFor={'fullName'}>Full Name*</label>
                    <input type="text" id={'fullName'} placeholder={'Enter your name...'}
                           defaultValue={''} {...register('full_name')}/>
                    <div className={css['order-form__section__field__error']}>{errors.full_name?.message}</div>
                </div>
                <div className={css['order-form__section__field']}>
                    <label htmlFor={'email'}>Your Email*</label>
                    <input type="text" id={'email'} placeholder={'Enter your email...'}
                           defaultValue={''} {...register('email')}/>
                    <div className={css['order-form__section__field__error']}>{errors.email?.message}</div>
                </div>
            </div>

            <div className={css['order-form__section']}>
                <div className={css['order-form__section__field']}>
                    <label htmlFor={'address'}>Address*</label>
                    <input type="text" id={'address'} placeholder={'Enter your address...'}
                           defaultValue={''} {...register('address')}/>
                    <div className={css['order-form__section__field__error']}>{errors.address?.message}</div>
                </div>
                <div className={css['order-form__section__field']}>
                    <label htmlFor={'phone'}>Phone number*</label>
                    <input type="tel" id={'phone'} placeholder={'Enter your phone number...'}
                           defaultValue={''} {...register('phone_number')}/>
                    <div className={css['order-form__section__field__error']}>{errors.phone_number?.message}</div>
                </div>
            </div>

            <div className={css['order-form__section']}>
                <div className={css['order-form__section__field']}>
                    <label htmlFor={'message'}>Message</label>
                    <textarea id={'message'} placeholder={'Some extra information'}
                              defaultValue={''} {...register('message')} className={css.textarea}/>
                    <div className={css['order-form__section__field__error']}>{errors.message?.message}</div>
                </div>
            </div>
            <div className={css['order-form__btn']}>
                <Button text={'Confirm'} btnClass={'info--blue'} arrow={false}/>
            </div>
        </form>
    );
};

export {OrderForm};