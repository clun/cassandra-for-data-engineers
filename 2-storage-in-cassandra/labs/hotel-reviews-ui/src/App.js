import React from 'react';
import { HashRouter} from 'react-router-dom'
import 'core-js/stable'
import 'regenerator-runtime/runtime'

import Header from "./components/Header"
import Hotels from './components/Hotels';
import SectionSlider from './components/SectionSlider';
import SectionCarousel from './components/SectionCarousel';


/**
 * Main Application
 */
const App = () => {
  
  return (
      <HashRouter>
        <Header />
        <SectionSlider />
        <SectionCarousel city="Paris" country="France"/>
        <Hotels />
     </HashRouter>
  ) 
};

export default App;


