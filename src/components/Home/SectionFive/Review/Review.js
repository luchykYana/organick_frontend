import css from './Review.module.sass';
import {Stars} from '../../../Stars/Stars';

const Review = ({review}) => {
    const {image, text, name, position} = review;

    return (
        <div className={css.review}>
            <div className={css['review__image']}>
                <img src={image} alt="person"/>
            </div>
            <div>
                <Stars count={5}/>
            </div>
            <p className={`paragraph`}>{text}</p>
            <h6 className={`heading-h6`}>{name}</h6>
            <p className={`paragraph`}>{position}</p>
        </div>
    );
};

export {Review};