import React from 'react';
import { Outlet, useNavigation } from 'react-router';
import Navbar from '../components/shared/Navbar';
import Footer from '../components/shared/Footer';
import { GridLoader } from 'react-spinners';


const RootLayout = () => {
    const navigation = useNavigation()
    return (
        <div>
            <Navbar/>
            {navigation.state==="loading" ? <GridLoader />: <Outlet />} 
            
            <Footer/>
        </div>
    );
};

export default RootLayout;