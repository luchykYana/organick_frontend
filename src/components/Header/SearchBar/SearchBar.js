import css from './SearchBar.module.sass';

const SearchBar = () => {
    return (
        <form className={css['search-bar']}>
            <input type="search" required className={css['search-bar__input']}/>
            <button type={'submit'} className={css['search-bar__btn']}>
                <div className={css['btn__icon']}></div>
            </button>
        </form>
    );
};

export {SearchBar};