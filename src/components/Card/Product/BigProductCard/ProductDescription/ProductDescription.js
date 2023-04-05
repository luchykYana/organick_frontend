import {useEffect, useState} from 'react';

import {Button} from '../../../../Button/Button';

import css from './ProductDescription.module.sass';

const ProductDescription = ({productDescription, additionalInfo}) => {
    const [text, setText] = useState(productDescription);
    const [checkedD, setCheckedD] = useState('info--blue--checked');
    const [checkedA, setCheckedA] = useState('info--blue');

    useEffect(() => {
        if (text === productDescription) {
            setCheckedD('info--blue--checked');
            setCheckedA('info--blue');
        } else {
            setCheckedD('info--blue');
            setCheckedA('info--blue--checked');
        }
    }, [productDescription, text]);

    const clickDesc = () => setText(productDescription);
    const clickAdd = () => setText(additionalInfo);

    return (
        <div className={css['product-description']}>
            <div className={css['product-description__buttons']}>
                <Button text={'Product Description'} btnClass={`${checkedD}`} arrow={false} click={clickDesc}/>
                <Button text={'Additional Info'} btnClass={`${checkedA}`} arrow={false} click={clickAdd}/>
            </div>
            <div className={`paragraph ${css['product-description__text']}`}>
                {text}
            </div>
        </div>
    );
};

export {ProductDescription};
