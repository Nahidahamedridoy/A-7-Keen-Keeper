import React from 'react';
import { Outlet, useNavigation } from 'react-router';
import Navbar from '../components/shared/Navbar';
import Footer from '../components/shared/Footer';
import { GridLoader } from 'react-spinners';
import { ToastContainer } from 'react-toastify';


const RootLayout = () => {
    const navigation = useNavigation()
    return (
        <div>
            <Navbar/>
            {navigation.state==="loading" ? <GridLoader />: <Outlet />} 
            
            <Footer/>

            <ToastContainer />
        </div>
    );
};

export default RootLayout;