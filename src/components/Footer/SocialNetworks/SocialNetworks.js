import {Logo} from '../../Logo/Logo';
import {MediaIcon} from './MediaIcon/MediaIcon';

import css from './SocialNetwork.module.sass';

const SocialNetworks = () => {
    return (
        <section className={css['social-networks']}>
            <header className={`heading-h5`}>
                <Logo/>
            </header>

            <p className={`paragraph`}>
                Simply dummy text of the printing and typesetting industry. Lorem Ipsum simply dummy text of the
                printing
            </p>

            <div className={css['social-networks__icons']}>
                <MediaIcon network={'instagram'} link={'https://www.instagram.com/'}/>
                <MediaIcon network={'facebook'} link={'https://uk-ua.facebook.com/'}/>
                <MediaIcon network={'twitter'} link={'https://twitter.com/?lang=uk'}/>
                <MediaIcon network={'pinterest'} link={'https://www.pinterest.com/'}/>
            </div>
        </section>
    );
};

export {SocialNetworks};