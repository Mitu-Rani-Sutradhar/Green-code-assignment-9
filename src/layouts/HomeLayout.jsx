import React from 'react';
import { Outlet } from 'react-router';
import Footer from '../conponents/Footer';

import Navbar from '../conponents/Navbar';
import Hero from '../conponents/Hero';
import TopRatedPlants from '../conponents/TopRatedPlants';
import Experts from '../conponents/Experts';
import PlantsTips from '../conponents/PlantsTips';

const HomeLayout = () => {
    return (
        <div>
            <nav className='sticky top-0 h-fit'>
               <Navbar></Navbar>
            </nav>
            <main>
                <section>
                <Hero></Hero>
                </section>
                <section>
                    <TopRatedPlants></TopRatedPlants>
                </section>
                <section>
                    <PlantsTips></PlantsTips>
                </section>
                <section>
                    <Experts></Experts>
                </section>
                <section className=''>
                    <Outlet></Outlet>
                </section>
                
            </main>
            <footer>
                 <Footer></Footer>
            </footer>
        </div>
    );
};

export default HomeLayout;