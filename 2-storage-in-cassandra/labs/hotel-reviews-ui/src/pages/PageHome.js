import {React, useState} from 'react';
import SliderLocations from '../components/slider/SliderLocations';
import HotelsList from '../components/hotels/HotelsList';

import { SelectedLocationContext } from '../contexts/SelectedLocationContext';

/**
 * Main Application
 */
const PageHome = () => {

  // Initialization block Botton
  const [selectedLocation, setSelectedLocation] = useState(
    {city:"Vienna", country:"Austria", size:5}
  );
 
  // Sharing the selected location to both components to update
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


