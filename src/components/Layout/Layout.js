import {Outlet} from 'react-router-dom';

import {Header} from '../Header/Header';
import {Footer} from '../Footer/Footer';

import css from './Layout.module.sass'

const Layout = () => {
    return (
        <div>
            <div className={`grid-container ${css['page-header']}`}>
                <Header/>
            </div>
            <div className={`grid-container`}>
                <Outlet/>
            </div>
            <div className={`grid-container`}>
                <Footer/>
            </div>
        </div>
    );
};

export {Layout};