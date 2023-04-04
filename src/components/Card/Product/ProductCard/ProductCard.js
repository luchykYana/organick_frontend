import {useDispatch, useSelector} from 'react-redux';
import {useEffect, useRef, useState} from 'react';

import {productActions} from '../../../../store';
import {URL} from '../../../../configs';
import {Price} from '../Price/Price';
import {Stars} from '../../../Stars/Stars';
import css from './ProductCard.module.sass';
import {Category} from '../Category/Category';

const {productForMore} = productActions;

const ProductCard = ({product, clickBtn}) => {
    const {categories} = useSelector(state => state.categoryReducer);
    const [categoryP, setCategoryP] = useState('product');
    const productCardRef = useRef(null);
    const dispatch = useDispatch();

    const {name, image, category, price, discount, rating} = product;

    useEffect(() => {
        const productCard = productCardRef.current;

        if (productCard) {
            productCard.style.background = `url(${URL.baseURL}${URL.images}/${image}) center no-repeat, #F9F8F8`;
        }

        const nameP = categories.filter(c => c.category_id === category)[0]?.name;
        setCategoryP(nameP);
    }, [categories, category, image]);

    const click = () => clickBtn ? dispatch(productForMore({id: product.id, product})) : null;

    return (
        <div className={css['product-card']} ref={productCardRef} onClick={click}>
            <Category category={categoryP}/>
            <div className={css['product-card__info']}>
                <h6 className={`card-heading`}>{name}</h6>
                <hr/>
                <div className={css['product-card__info__values']}>
                    <div><Price price={price} discount={discount}/></div>
                    <div><Stars count={rating}/></div>
                </div>
            </div>
        </div>
    );
};

export {ProductCard};