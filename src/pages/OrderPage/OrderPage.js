import {CartBanner, OrderList} from '../../components';

const OrderPage = () => {
    return (
        <div className={`grid-content-full`}>
            <CartBanner/>
            <OrderList/>
        </div>
    );
};

export {OrderPage};