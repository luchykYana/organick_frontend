import {SocialNetworks} from './SocialNetworks/SocialNetworks';
import {UtilityPages} from './UtilityPages/UtilityPages';
import {ContactUs} from './ContactUs/ContactUs';
import {Copyright} from './Copyright/Copyright';

import css from './Footer.module.sass';

const Footer = () => {
    return (
        <div className={`grid-content-full grid-container ${css.footer}`}>
            <div className={`grid-content ${css['footer__content']}`}>
                <ContactUs/>
                <div className={css['footer__delimiter--vertical']}></div>
                <SocialNetworks/>
                <div className={css['footer__delimiter--vertical']}></div>
                <UtilityPages/>
            </div>

            <div className={`grid-content-full`}>
                <div className={css['footer__delimiter--horizontal']}></div>
                <Copyright/>
            </div>
        </div>
    );
};

export {Footer};