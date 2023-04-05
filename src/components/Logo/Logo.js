import {useNavigate} from 'react-router-dom';

const Logo = () => {
    const navigate = useNavigate();

    const home = () => navigate('/', {replace: true});

    return (
        <div onClick={home}>
            <img src={'http://localhost:5000/images/logo.svg'} alt="logo"/>
        </div>
    );
};

export {Logo};