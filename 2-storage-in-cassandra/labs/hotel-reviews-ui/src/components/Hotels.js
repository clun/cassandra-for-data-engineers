import React from "react";

const {getHotelsByCountry} = require("./utils/astraClient");

const Hotels = () => {

    const showHotels = async () => {
        const hotels = await getHotelsByCountry();
        console.log(hotels);
    }

    return <h2>Hotels</h2>

}

export default Hotels

