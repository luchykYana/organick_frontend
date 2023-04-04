import {Button} from '../../Button/Button';
import css from './SectionThree.module.sass';

const SectionThree = () => {
    return (
        <section className={`grid-container ${css['section-three--bg']}`}>
            <div className={`grid-content ${css['section-three']}`}>
                <div className={css['section-three__image']}></div>
                <div className={css['section-three__content']}>
                    <p className={`caption`}>About Us</p>
                    <h2 className={`heading-h2`}>We Believe in Working Accredited Farmers</h2>
                    <p className={`paragraph`}>
                        Simply dummy text of the printing and typesetting industry. Lorem had ceased to been the
                        industry's standard dummy text ever since the 1500s, when an unknown printer took a galley.
                    </p>

                    <div className={css.list}>
                        <div className={css['list__item']}>
                            <div className={`${css['list__item__image']} ${css['image--one']}`}></div>
                            <div className={css['list__item__text']}>
                                <h6 className={`heading-h6`}>Organic Foods Only</h6>
                                <p className={`paragraph`}>
                                    Simply dummy text of the printing and typesetting industry. Lorem Ipsum
                                </p>
                            </div>
                        </div>

                        <div className={css['list__item']}>
                            <div className={`${css['list__item__image']} ${css['image--two']}`}></div>
                            <div className={css['list__item__text']}>
                                <h6 className={`heading-h6`}>Quality Standards</h6>
                                <p className={`paragraph`}>
                                    Simply dummy text of the printing and typesetting industry. Lorem Ipsum
                                </p>
                            </div>
                        </div>
                    </div>

                    <Button text={'Shop Now'} btnClass={'info--blue'} arrow={true}/>
                </div>
            </div>
        </section>
    );
};

export {SectionThree};