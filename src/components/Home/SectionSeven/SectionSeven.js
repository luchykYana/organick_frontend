import css from './SectionSeven.module.sass';

const SectionSeven = () => {
    return (
        <section className={css['section-seven']}>
            <div className={css['section-seven__image']}></div>

            <div className={css['section-seven__content']}>
                <p className={`caption`}>Eco Friendly</p>
                <h2 className={`heading-h2`}>Econis is a Friendly Organic Store</h2>
                <div className={css['section-seven__content__article']}>
                    <h6 className="heading-h6">Start with Our Company First</h6>
                    <p className="paragraph">
                        Sed ut perspiciatis unde omnis iste natus error sit voluptat accusantium doloremque laudantium.
                        Sed ut perspiciatis.
                    </p>
                </div>
                <div className={css['section-seven__content__article']}>
                    <h6 className="heading-h6">Learn How to Grow Yourself</h6>
                    <p className="paragraph">
                        Sed ut perspiciatis unde omnis iste natus error sit voluptat accusantium doloremque laudantium.
                        Sed ut perspiciatis.
                    </p>
                </div>
                <div className={css['section-seven__content__article']}>
                    <h6 className="heading-h6">Farming Strategies of Today</h6>
                    <p className="paragraph">
                        Sed ut perspiciatis unde omnis iste natus error sit voluptat accusantium doloremque laudantium.
                        Sed ut perspiciatis.
                    </p>
                </div>
            </div>
        </section>
    );
};

export {SectionSeven};