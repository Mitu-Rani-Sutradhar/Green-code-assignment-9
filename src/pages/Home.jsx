import React from 'react';
import Hero from '../conponents/Hero';
import TopRatedPlants from '../conponents/TopRatedPlants';
import PlantsTips from '../conponents/PlantsTips';
import Experts from '../conponents/Experts';
import HousePlants from '../conponents/HousePlants';

const Home = () => {
    return (
        <div>
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
                <section>
                    <HousePlants></HousePlants>
                </section>
        </div>
    );
};

export default Home;