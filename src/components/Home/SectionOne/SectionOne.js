import {Button} from '../../Button/Button';
import css from './SectionOne.module.sass';

const SectionOne = () => {
    return (
        <section className={`grid-container ${css['section-one']}`}>
            <div className={`grid-content ${css['section-one__content']}`}>
                <p className={`caption`}>100% Natural Food</p>
                <header className={`heading-h1`}>Choose the best healthier way of life</header>
                <Button text={'Explore Now'} btnClass={'info--yellow'} arrow={true}/>
            </div>
        </section>
    );
};

export {SectionOne};