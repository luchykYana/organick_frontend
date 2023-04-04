import {AdCard} from '../../Card';
import css from './SectionTwo.module.sass';

const SectionTwo = () => {
    return (
        <section className={`grid-content ${css['section-two']}`}>
            <AdCard caption={'Natural!!'} text={'Get Garden Fresh Fruits'} image={'one'}/>
            <AdCard caption={'Offer!!'} text={'Get 10% off on Vegetables'} image={'two'}/>
        </section>
    );
};

export {SectionTwo};