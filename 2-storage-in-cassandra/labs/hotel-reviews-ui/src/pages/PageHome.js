import React from 'react';
import { HashRouter} from 'react-router-dom'
import Header from "../components/Header"
import SliderLocations from '../components/slider/SliderLocations';
import LocationHotelsList from '../components/hotels/LocationHotelsList';

/**
 * Main Application
 */
const PageHome = () => {
  return (
     <>
        <SliderLocations />
        <LocationHotelsList city="Paris" country="France" size="5" />
    </>
  ) 
};

export default PageHome;


