import {NavLink} from 'react-router-dom';

import css from './Navigator.module.sass';

const Navigation = () => {
    return (
        <nav className={css['main-nav']}>
            <NavLink to={'/'}>Home</NavLink>
            <NavLink to={'/'}>About</NavLink>
            <NavLink to={'/'}>Pages</NavLink>
            <NavLink to={'/'}>Shop</NavLink>
            <NavLink to={'/'}>Projects</NavLink>
            <NavLink to={'/'}>News</NavLink>
        </nav>
    );
};

export {Navigation};