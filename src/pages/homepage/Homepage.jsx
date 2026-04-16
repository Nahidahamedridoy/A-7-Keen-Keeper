import React from 'react';
import Banner from '../../components/homepages/Banner';
import Friend from '../../components/homepages/Friend';
import Card from '../../components/homepages/Card';

const Homepage = () => {
    return (
        <div className="bg-base-200">
        <Banner/>
        <Card/>
        <Friend/>
        </div>
        
    );
};

export default Homepage;