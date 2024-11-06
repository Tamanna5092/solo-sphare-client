import React from 'react';
import Carousel from '../component/Carousel';
import TabCategories from '../component/TabCategories';
import { useLoaderData } from 'react-router-dom';

const Home = () => {
    const jobs = useLoaderData()
    console.log(jobs)
    return (
        <div>
            <Carousel></Carousel>
            <TabCategories jobs={jobs}></TabCategories>
        </div>
    );
};

export default Home;