import {Button} from '../../Button/Button';
import {NewsCard} from '../../Card';
import {news} from '../../../configs';

import css from './SectionNine.module.sass';

const SectionNine = () => {
    return (
        <section className={`grid-container ${css['section-nine']}`}>
            <div className={`grid-content`}>
                <header className={css['section-nine__header']}>
                    <div className={css['section-nine__header__text']}>
                        <p className={`caption`}>News</p>
                        <h2 className={`heading-h2`}>Discover weekly content about organic food, & more</h2>
                    </div>
                    <Button text={'More News'} btnClass={'info--blue'} arrow={true}/>
                </header>

                <div className={css['section-nine__content']}>
                    {news.map(n => <NewsCard key={n.id} news={n}/>)}
                </div>
            </div>
        </section>
    );
};

export {SectionNine};