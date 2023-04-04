import {axiosService} from './axios.service';
import {URL} from '../configs';

const {orders} = URL;

export const orderService = {
    create: (order) => axiosService.post(orders, order).then(value => value.data)
}