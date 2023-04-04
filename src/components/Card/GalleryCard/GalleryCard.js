import css from './GalleryCard.module.sass';

const GalleryCard = ({text, image}) => {
    return (
        <div className={`${css['gallery-card']} ${css[`gallery-card--${image}`]}`}>
            <div className={css[`gallery-card__text`]}>
                <h6 className={`heading-h6`}>{text}</h6>
            </div>
        </div>
    );
};

export {GalleryCard};