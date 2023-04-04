import css from './Price.module.sass';

const Price = ({price, discount}) => {
    return (
        <div className={css.price}>
            {discount === 0 && <div className={`card-discount`}>${price}.00</div>}
            {discount !== 0 && <div className={`card-price ${css.text}`}>${price}.00</div>}
            {discount !== 0 && <div className={`card-discount`}>${price - (price / 100 * discount)}.00</div>}
        </div>
    );
};

export {Price};