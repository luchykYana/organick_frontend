import {useDispatch, useSelector} from 'react-redux';
import {joiResolver} from '@hookform/resolvers/joi';
import {useForm} from 'react-hook-form';

import {emailValidator} from '../../../validators';
import {subscribeThunk} from '../../../store';
import {Button} from '../../Button/Button';

import css from './SectionTen.module.sass';

const SectionTen = () => {
    const {subscribe} = useSelector(state => state.customerReducer);

    const dispatch = useDispatch();
    const {
        handleSubmit, register, formState: {errors}, reset
    } = useForm({resolver: joiResolver(emailValidator), mode: 'onTouched'});

    const subscribeForNews = (data) => {
        const customer = {
            email: data.email,
            subscription: true
        };

        dispatch(subscribeThunk(customer));
        reset();
    }

    return (
        <section className={`grid-container`}>
            <div className={`grid-content ${css['section-ten']}`}>
                <header className={css['section-ten__header']}>
                    Subscribe to our Newsletter
                </header>
                <div>
                    <form onSubmit={handleSubmit(subscribeForNews)} className={css['section-ten__form']}>
                        <input type="email" placeholder={'Your Email Address'}
                               defaultValue={''} {...register('email')}/>
                        <Button text={'Subscribe'} btnClass={'info--blue'} arrow={false}/>
                    </form>
                    <div className={css['section-ten__form__error']}>{errors.email?.message}</div>
                    {subscribe && <div className={css.subscribe}>Thank you for subscribing!</div>}
                </div>
            </div>
        </section>
    );
};

export {SectionTen};