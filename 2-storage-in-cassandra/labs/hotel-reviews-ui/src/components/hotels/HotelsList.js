import { React, useEffect, useState, useContext } from "react"
import Hotel from "./Hotel"
import axios from 'axios'

import { SelectedLocationContext } from '../../contexts/SelectedLocationContext';

/**
 * Render Hotel list at bottom of the page on home creen
 */
const HotelsList = () => {
    
    /**
     * Hold hotel list coming from DB
     */
    const [hotels, setHotels] = useState(null)

    /**
     * Shared selected location among multiple
     * components.
     */
    const {selectedLocation} = useContext(SelectedLocationContext);

    /**
     * Populating Hotel list from DB
     */
    const fetchLocationHotels = async () => {
        let size = (selectedLocation.size === undefined) ? 5 : selectedLocation.size;
        const hotelHttpResponse = await axios.get('/.netlify/functions/getHotelsList?'
         + 'country=' + selectedLocation.country 
         + '&city=' + selectedLocation.city 
         + '&size=' + size);
        setHotels(hotelHttpResponse.data)
    }

    /**
     * Load Hotel list on initialization and update of the context.
     */
    useEffect(() => {
        console.log("Updating hotels from" + selectedLocation);
        fetchLocationHotels()
    }, [selectedLocation])
    
    /**
     * Render Hotel list
     */
    return (
        <div className="container container-custom margin_80_0">
            
            <div className="main_title_2">
                <span><em></em></span>
                <h2>Popular hotels for {selectedLocation.country}</h2>
                <p>Here are the top {selectedLocation.size} best rated hotels in {selectedLocation.city}</p>
            </div>

            <div className="isotope-wrapper">
                {hotels && hotels.map((hotel, index) => <Hotel key={index} hotel={hotel} city={selectedLocation.city}/>)}
            </div>
            <p className="btn_home_align"><a href="tours-grid-isotope.html" className="btn_1 rounded">View all</a></p>
            <hr className="large" />
        </div>
    )
}

export default HotelsList;
