import css from './AdCard.module.sass';

const AdCard = ({caption, text, image}) => {
    return (
        <div className={`${css['ad-card']} ${css[`ad-card--${image}`]}`}>
            <p className={`caption`}>{caption}</p>
            <h3 className={`heading-h3`}>{text}</h3>
        </div>
    );
};

export {AdCard};