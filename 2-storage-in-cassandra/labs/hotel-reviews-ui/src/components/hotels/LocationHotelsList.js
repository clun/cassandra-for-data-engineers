import { React, useEffect, useState } from "react"
import Hotel from "./Hotel"
import axios from 'axios'

/**
 * This component will show a list of hotels for a particular locations
 * order by rating desc.
 */
const LocationHotelsList = ({city, country, size}) => {
    
    // Store hotels for one location
    const [hotels, setHotels] = useState(null)

    // Retrieve locations from table 'locations'
    const fetchLocationHotels = async () => {
        const hotelHttpResponse = await axios.get('/.netlify/functions/getLocationHotels?'
         + 'country=' + country 
         + '&city=' + city 
         + '&size=' + size)
        setHotels(hotelHttpResponse.data)
        console.log(hotelHttpResponse.data)
    }

    useEffect(() => {
        fetchLocationHotels()
    }, [])
    
    return (
      
<div className="container container-custom margin_80_0">
    
{country && (
    <div className="main_title_2">
        <span><em></em></span>
        <h2>Popular hotels for {country}</h2>
        <p>Here are the top {size} best rated hotels in {city}</p>
    </div>
)}
    <div className="isotope-wrapper">
        {hotels && hotels.map((hotel, index) => <Hotel key={index} hotel={hotel} city={city}/>)}
    </div>
    <p className="btn_home_align"><a href="tours-grid-isotope.html" className="btn_1 rounded">View all</a></p>
    <hr className="large" />
</div>


    )
}

export default LocationHotelsList;
