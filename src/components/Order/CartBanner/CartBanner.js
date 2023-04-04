import css from './CartBanner.module.sass';

const CartBanner = () => {
    return (
        <section className={css['cart-banner']}>
            <header className={`heading-h1`}>Cart</header>
        </section>
    );
};

export {CartBanner};