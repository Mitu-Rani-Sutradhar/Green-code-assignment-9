import { use } from "react";
import { ImGift } from "react-icons/im";

// import React, { use } from 'react';
const housePlantPromise = fetch("/house.json").then((res) =>res.json());

const HousePlants = () => {
    const housePlants = use(housePlantPromise);
    console.log(housePlants);
    return (
        <div className="bg-base-200 mb-5 rounded-lg">
            <div className="py-5 text-3xl font-bold">
                Houseplants for Living Room
            </div>

            <div className="lg:flex justify-between">
                {
            housePlants.map(plants =>(
                <div className="">
                <img className="h-[300px]
                w-[270px] py-5 px-5 rounded-3xl" src={plants.image} alt="" />
                <p className="text-lg font-semibold pb-5">{plants.plantName}</p>
                </div>
            ))}
            </div>
            
        </div>
    );
};

export default HousePlants;