import {axiosService} from './axios.service';
import {URL} from '../configs';

const {categories} = URL;

export const categoryService = {
    getAllCategories: () => axiosService.get(categories)
}