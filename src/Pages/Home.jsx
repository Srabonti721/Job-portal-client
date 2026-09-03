import React from 'react';
import Banner from './HomePage/Banner';
import Category from './HomePage/Category';
import HotJobs from './HotJobs/HotJobs';

    const jobsPromice = fetch("http://localhost:5000/jobs").then(res=>res.json())
const Home = () => {

    return (
        <div>
            <Banner/>
            <HotJobs jobsPromice={jobsPromice}/>
            <Category/>
        </div>
    );
};

export default Home;