import {Route, Routes} from 'react-router-dom';

import {Layout} from './components';
import {OrderPage, HomePage, NotFoundPage, SuccessPage} from './pages';

const App = () => {
    return (
        <Routes>
            <Route path={'/'} element={<Layout/>}>
                <Route index element={<HomePage/>}/>
                <Route path={'order'} element={<OrderPage/>}/>
                <Route path={'success'} element={<SuccessPage/>}/>
                <Route path={'*'} element={<NotFoundPage/>}/>
            </Route>
        </Routes>
    );
};

export {App};