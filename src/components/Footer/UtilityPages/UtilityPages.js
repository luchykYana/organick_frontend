import {useNavigate} from 'react-router-dom';

import css from './UtilityPages.module.sass';

const UtilityPages = () => {
    const navigate = useNavigate();

    const notFound = () => navigate('*', {replace: true});

    return (
        <section className={css['utility-pages']}>
            <header className={`heading-h5`}>Utility Pages</header>
            <div className={css['utility-pages__links']}>
                <div onClick={notFound} className={`paragraph ${css.link}`}>Style Guide</div>
                <div onClick={notFound} className={`paragraph ${css.link}`}>404 Not Found</div>
                <div onClick={notFound} className={`paragraph ${css.link}`}>Password Protected</div>
                <div onClick={notFound} className={`paragraph ${css.link}`}>Licences</div>
                <div onClick={notFound} className={`paragraph ${css.link}`}>Changelog</div>
            </div>
        </section>
    );
};

export {UtilityPages};