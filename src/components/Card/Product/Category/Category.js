import css from './Category.module.sass';

const Category = ({category}) => {
    return (
        <div className={`card-mark ${css.category}`}>
            {category}
        </div>
    );
};

export {Category};