import css from './Header.module.sass';

import {Navigation} from './Navigation/Navigation';
import {SearchBar} from './SearchBar/SearchBar';
import {Cart} from './Cart/Cart';
import {Logo} from '../Logo/Logo';

const Header = () => {
    return (
        <header className={`grid-content ${css['page-header__content']}`}>
            <Logo/>
            <Navigation/>
            <SearchBar/>
            <Cart/>
        </header>
    );
};

export {Header};