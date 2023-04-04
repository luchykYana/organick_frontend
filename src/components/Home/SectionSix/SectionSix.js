import {useSelector} from 'react-redux';

import {ProductCard} from '../../Card';
import css from './SectionSix.module.sass';

const SectionSix = () => {
    const {products} = useSelector(store => store.productReducer);

    return (
        <section className={`grid-container ${css['section-six']}`}>
            <div className={`grid-content`}>
                <p className={`caption`}>Offer</p>
                <header className={`heading-h2`}>We Offer Organic For You</header>
                <div className={css['section-six__products']}>
                    {products && products
                        .filter(p => p.category === 1)
                        .map((p, index) => index < 4 ? <ProductCard key={p.id} product={p} clickBtn={false}/> : null)}
                </div>
            </div>
        </section>
    );
};

export {SectionSix};