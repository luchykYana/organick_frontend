import {useEffect, useRef} from 'react';

import css from './Stars.module.sass';

const Stars = ({count}) => {
    const starsRef = useRef(null);

    useEffect(() => {
        const childrenArray = starsRef.current.children;

        let i = 0;
        for (const elem of childrenArray) {
            if(i < count) {
                elem.classList.add(css.checked)
            }
            i++;
        }
    }, [count])

    return (
        <div className={css.stars} ref={starsRef}>
            <span className={`fa fa-star ${css.star}`}></span>
            <span className={`fa fa-star ${css.star}`}></span>
            <span className={`fa fa-star ${css.star}`}></span>
            <span className={`fa fa-star ${css.star}`}></span>
            <span className={`fa fa-star ${css.star}`}></span>
        </div>
    );
};

export {Stars};