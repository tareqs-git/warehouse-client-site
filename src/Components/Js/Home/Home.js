import React from 'react';
import Banner from './Banner';
import HomeProducts from './HomeProducts';
import MyStuff from './MyStuff';
import WhyMe from './WhyMe';

const Home = () => {
    return (
        <div className='bg-black pb-5'>
            <Banner></Banner>
            <HomeProducts></HomeProducts>
            <MyStuff></MyStuff>
            <WhyMe></WhyMe>
 
        </div>
    );
};

export default Home;