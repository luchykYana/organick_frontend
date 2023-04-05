import {useEffect, useRef} from 'react';

import {Button} from '../../Button/Button';
import {URL} from '../../../configs';

import css from './NewsCard.module.sass';

const NewsCard = ({news}) => {
    const {title, text, author, day, month, image} = news;
    const imageRef = useRef(null);

    useEffect(() => {
        if (imageRef.current) {
            imageRef.current.style.background = `url(${URL.baseURL}${URL.images}/${image}) center no-repeat`;
        }
    }, [image, imageRef]);

    return (
        <div className={css['news-card']} ref={imageRef}>
            <div className={css['news-card__date']}>
                <h6>{day}</h6>
                <h6>{month}</h6>
            </div>
            <div className={css['news-card__info']}>
                <div>
                    <div className={css['news-card__info__author']}>{author}</div>
                    <h6 className={`heading-h6`}>{title}</h6>
                    <p className={`paragraph`}>{text}</p>
                </div>
                <Button text={'Read More'} btnClass={'info--yellow'} arrow={true}/>
            </div>
        </div>
    );
};

export {NewsCard};