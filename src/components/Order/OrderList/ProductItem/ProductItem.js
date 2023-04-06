import {useDispatch, useSelector} from 'react-redux';
import {useEffect, useRef, useState} from 'react';

import {ProductFormUpdate} from '../ProductFormUpdate/ProductFormUpdate';
import {CloseButton, Price} from '../../../Card/Product';
import {orderActions} from '../../../../store';
import {URL} from '../../../../configs';

import css from './ProductItem.module.sass';

const {deleteProductFromCart} = orderActions;

const ProductItem = ({item}) => {
    const {products} = useSelector(state => state.productReducer);
    const [product, setProduct] = useState({});
    const productCardRef = useRef(null);
    const dispatch = useDispatch();

    useEffect(() => {
        const elem = products.find(p => p.id === item.product_id);
        setProduct(elem);
        const productCard = productCardRef.current;

        if (productCard) {
            productCard.style.background = `url(${URL.baseURL}${URL.images}/${elem?.image}) center/60% no-repeat, #FFF0D5`;
        }
    }, [item.product_id, products]);

    const click = () => dispatch(deleteProductFromCart({product_id: product?.id}));

    return (
        <div className={css['product-item']}>
            <div className={css['product-item__image']} ref={productCardRef}></div>
            <h3 className={`heading-h3`}>{product?.name}</h3>
            <div className={css['product-item__text']}>
                <Price price={product?.price} discount={product?.discount}/>
            </div>
            <ProductFormUpdate id={item.product_id} value={item.amount}/>
            <CloseButton click={click}/>
        </div>
    );
};

export {ProductItem};