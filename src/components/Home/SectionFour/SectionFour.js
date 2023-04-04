import {useDispatch, useSelector} from 'react-redux';
import {useCallback, useEffect, useRef, useState} from 'react';

import {productActions} from '../../../store';
import {BigProductCard, ProductCard} from '../../Card';
import {Button} from '../../Button/Button';
import css from './SectionFour.module.sass';

const {cleanProductForMore} = productActions;

const SectionFour = () => {
    const {products, productId} = useSelector(state => state.productReducer);
    const [text, setText] = useState('Load More');
    const [index, setIndex] = useState(8);
    const dispatch = useDispatch();
    const productsRef = useRef();

    const more = () => {
        if (index === 8) {
            setIndex(products.length);
            setText('Hide All');
        } else {
            setIndex(8);
            setText('Load More');
        }
    }

    const handleClick = useCallback((event) => {
        if (productId) {
            event.stopPropagation();
            dispatch(cleanProductForMore());
        }
    }, [dispatch, productId]);

    useEffect(() => {
        if (productsRef.current?.classList.contains(css.overlay) && !productId) {
            productsRef.current?.classList.remove(css.overlay);
        } else {
            productsRef.current?.classList.add(css.overlay);
        }
    }, [productId])

    return (
        <section className={`grid-container`}>
            <div className={`grid-content ${css['section-four']}`}>
                <div className={css['section-four__products']} ref={productsRef} onClick={handleClick}>
                    <div className={css['section-four__products__cards']}>
                        {products.map((p, i) => i < index ?
                            <ProductCard key={p.id} product={p} clickBtn={true}/> : null)}
                    </div>
                    <div className={css['section-four__btn']}>
                        <Button text={text} btnClass={'info--blue'} arrow={true} click={more}/>
                    </div>
                </div>
                <div className={css['section-four__big-card']}>
                    {productId && <BigProductCard product={productId}/>}
                </div>
            </div>
        </section>
    );
};

export {SectionFour};