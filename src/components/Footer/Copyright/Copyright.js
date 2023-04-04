import css from './Copyright.module.sass';

const Copyright = () => {
    return (
        <div className={css.copyright}>
            Copyright © <a href={'#'} target={'_blank'}>Organick</a> | Designed by <a href={'#'} target={'_blank'}>VictorFlow</a> Templates - Powered by <a href={'#'} target={'_blank'}>Webflow</a>
        </div>
    );
};

export {Copyright};