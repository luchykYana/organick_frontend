import css from './Button.module.sass';

const Button = ({text, arrow, btnClass, click}) => {
    return (
        <button className={`${css.btn} ${css[`btn-${btnClass}`]}`} onClick={click} type={'submit'}>
            {text}
            {arrow && <div className={`${css.arrow}`}></div>}
        </button>
    );
};

export {Button};