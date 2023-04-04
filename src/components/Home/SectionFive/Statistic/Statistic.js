import css from './Statistic.module.sass';

const Statistic = ({title, text}) => {
    return (
        <div className={css.statistic}>
            <h2 className={`heading-h2`}>{title}</h2>
            <p className={`nav`}>{text}</p>
        </div>
    );
};

export {Statistic};