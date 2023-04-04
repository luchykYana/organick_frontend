import {useDispatch} from 'react-redux';
import {useEffect} from 'react';

import {
    SectionEight,
    SectionFive,
    SectionFour,
    SectionOne,
    SectionSeven,
    SectionSix,
    SectionThree,
    SectionTwo
} from '../../components';

import {getAllCategoriesThunk, getAllProductsThunk} from '../../store';

const HomePage = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getAllProductsThunk());
        dispatch(getAllCategoriesThunk());
    }, [dispatch]);

    return (
        <div className={`grid-content-full`}>
            <SectionOne/>
            <SectionTwo/>
            <SectionThree/>
            <SectionFour/>
            <SectionFive/>
            <SectionSix/>
            <SectionSeven/>
            <SectionEight/>
        </div>
    );
};

export {HomePage};