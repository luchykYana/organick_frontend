import {useNavigate} from 'react-router-dom';

import {Button} from '../Button/Button';

import css from './NotFound.module.sass';

const NotFound = () => {
    const navigate = useNavigate();

    const home = () => navigate('/', {replace: true});

    return (
        <div className={`grid-container ${css['not-found']}`}>
            <div className={`grid-content ${css['not-found__content']}`}>
                <div className={`number`}>404</div>
                <header className={`heading-h1`}>Page not found</header>
                <p className={`paragraph`}>The page you are looking for doesn't exist or has been moved</p>
                <Button text={'Go to Homepage'} btnClass={'info--blue'} arrow={true} click={home}/>
            </div>
        </div>
    );
};

export {NotFound};