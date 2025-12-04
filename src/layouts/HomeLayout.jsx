import React from 'react';
import { Outlet, useNavigate } from 'react-router';
import Footer from '../conponents/Footer';

import Navbar from '../conponents/Navbar';
import Hero from '../conponents/Hero';
import TopRatedPlants from '../conponents/TopRatedPlants';
import Experts from '../conponents/Experts';
import PlantsTips from '../conponents/PlantsTips';

const HomeLayout = () => {
    const {state} = useNavigate();
    return (
        <div>
            <header className=''>
               <Navbar></Navbar>
               {import.meta.env.VITE_name}
            </header>
            <main>
               
                <section className=''>
                 {state=="loading" ? <Loading/> :  <Outlet></Outlet>} 
                </section>
                
            </main>
            <footer>
                 <Footer></Footer>
            </footer>
        </div>
    );
};

export default HomeLayout;