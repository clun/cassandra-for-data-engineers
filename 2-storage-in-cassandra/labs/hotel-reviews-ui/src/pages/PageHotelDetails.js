import { React, useEffect, useState, useContext } from "react"
import { NavLink } from 'react-router-dom'
import axios from 'axios'

/**
 * Details for an Hotels
 */
const PageHotelDetails = () => {

  const queryParameters = new URLSearchParams(window.location.search)
  const uid = queryParameters.get("uid")
  
  const [hotelDetails, setHotelDetails] = useState(null)
  const [hotelReviews, setHotelReviews] = useState(null)

  /**
    * Populating Hotel list from DB
   **/
  const fetchHotelsInformation = async () => {
    //let size = (selectedLocation.size === undefined) ? 5 : selectedLocation.size;
    //const hotelHttpResponse = await axios.get('/.netlify/functions/getHotelsByLocation?'
    // + 'country=' + selectedLocation.country 
    // + '&city=' + selectedLocation.city 
    // + '&size=' + size);
    //setHotels(hotelHttpResponse.data)
}

  /**
     * Load Hotel list on initialization and update of the context.
     */
  useEffect(() => {
    console.log(uid);
    fetchHotelsInformation()
  }, [])

  return (
    <>
      <h1>Hotel Details {uid}</h1>
      <NavLink to="/" style={ {color: 'red' }}>OK
      </NavLink>
      </>
  ) 
};

export default PageHotelDetails;
