import React from 'react';
import MyProfile from '../conponents/MyProfile';
import Navbar from '../conponents/Navbar';
import Footer from '../conponents/Footer';

const MyProfileLayout = () => {
    return (
        <div>
            <Navbar></Navbar>
            <main className='py-7'>
                <MyProfile></MyProfile>
            </main>
            <Footer></Footer>
        </div>
    );
};

export default MyProfileLayout;