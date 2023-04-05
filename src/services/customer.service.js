import {axiosService} from './axios.service';
import {URL} from '../configs';

const {customersSubscribe} = URL;

export const customerService = {
    subscribe: (customer) => axiosService.post(customersSubscribe, customer).then(value => value.data)
}