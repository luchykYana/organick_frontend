import {axiosService} from './axios.service';
import {URL} from '../configs';

const {products} = URL;

export const productService = {
    getAllProducts: () => axiosService.get(products)
}