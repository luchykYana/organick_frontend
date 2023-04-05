import {Statistic} from './Statistic/Statistic';
import {Review} from './Review/Review';
import {review} from '../../../configs';

import css from './SectionFive.module.sass';

const SectionFive = () => {
    return (
        <section className={css['section-five']}>
            <header className={css['section-five__header']}>
                <p className={`caption`}>Testimonial</p>
                <h2 className={`heading-h2`}>What Our Customer Saying?</h2>
            </header>

            <div className={css['section-five__reviews']}>
                <Review review={review}/>
            </div>

            <div className={css['section-five__statistics']}>
                <Statistic title={'100%'} text={'Organic'}/>
                <Statistic title={'285'} text={'Active Product'}/>
                <Statistic title={'350+'} text={'Organic Orchads'}/>
                <Statistic title={'25+'} text={'Years of Farming'}/>
            </div>
        </section>
    );
};

export {SectionFive};