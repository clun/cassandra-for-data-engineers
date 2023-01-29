import {React, useState} from 'react';
// Contexts
import { SelectedLocationContext } from '../contexts/SelectedLocationContext';
// Components
import SliderLocations from '../components/slider/SliderLocations';
import HotelsList from '../components/hotels/HotelsList';

/**
 * Main Application
 */
const PageHome = () => {

  /**
   * Selected Location to pick hotel.
   * We also defined the default value at load
   */
  const [selectedLocation, setSelectedLocation] = useState(
    {city:"Vienna", country:"Austria", size:5}
  );
 
  /**
   * Render homepage with shared location
   */
  return (
     <>
        <SelectedLocationContext.Provider value={{selectedLocation, setSelectedLocation}} >
            <SliderLocations />
            <HotelsList />
        </SelectedLocationContext.Provider>
    </>
  ) 
};

export default PageHome;


