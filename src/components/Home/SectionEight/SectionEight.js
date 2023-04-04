import {GalleryCard} from '../../Card';
import css from './SectionEight.module.sass';

const SectionEight = () => {
    return (
        <section className={css['section-eight']}>
            <GalleryCard text={'Organic Juice'} image={'one'}/>
            <GalleryCard text={'Organic Food'} image={'two'}/>
            <GalleryCard text={'Nuts Cookies'} image={'three'}/>
        </section>
    );
};

export {SectionEight};