import {useEffect, useRef, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';

import {ProductDescription} from './ProductDescription/ProductDescription';
import {CloseButton} from '../CloseButton/CloseButton';
import {ProductForm} from './ProductForm/ProductForm';
import {Category} from '../Category/Category';
import {Stars} from '../../../Stars/Stars';
import {Price} from '../Price/Price';
import {URL} from '../../../../configs';
import {productActions} from '../../../../store';

import css from './BigProductCard.module.sass';

const {cleanProductForMore} = productActions;

const BigProductCard = ({product}) => {
    const {categories} = useSelector(state => state.categoryReducer);
    const [categoryP, setCategoryP] = useState('product');
    const productCardRef = useRef(null);
    const dispatch = useDispatch();

    const {description, product_description, additional, image, category, name, rating, price, discount, id} = product;

    useEffect(() => {
        const productCard = productCardRef.current;

        if (productCard) {
            productCard.style.background = `url(${URL.baseURL}${URL.images}/${image}) center/70% no-repeat, #F9F8F8`;
        }

        const nameP = categories.filter(c => c.category_id === category)[0]?.name;
        setCategoryP(nameP);
    }, [categories, category, image]);

    const click = () => dispatch(cleanProductForMore());

    return (
        <div className={css['big-product-card']}>
            <div className={css['big-product-card__content']}>
                <div className={css['big-product-card__info']}>
                    <div className={css['big-product-card__info__image']} ref={productCardRef}>
                        <Category category={categoryP}/>
                    </div>
                    <div className={css['big-product-card__info__text']}>
                        <h3 className={`heading-h3`}>{name}</h3>
                        <Stars count={rating}/>
                        <Price price={price} discount={discount}/>
                        <p className={`paragraph`}>{description}</p>
                        <ProductForm id={id} value={1}/>
                    </div>
                </div>

                <CloseButton click={click}/>
            </div>
            <div>
                <ProductDescription productDescription={product_description} additionalInfo={additional}/>
            </div>
        </div>
    );
};

export {BigProductCard};