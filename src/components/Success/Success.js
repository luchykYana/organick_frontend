import css from './Success.module.sass';

const Success = () => {
    return (
        <div className={css.success}>
            <h1 className={`heading-h1`}>Thank you for your order =)</h1>
            <div className={css['success__image']}></div>
        </div>
    );
};

export {Success};