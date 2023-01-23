import React from "react";

const {getHotelsByCountry} = require("./astra/astraClientRest");

const Hotels: React.FC = () => {

    const showHotels = async () => {
        const hotels = await getHotelsByCountry();
        console.log(hotels);
    }

    return <h2>Hotels</h2>

}

export default Hotels

