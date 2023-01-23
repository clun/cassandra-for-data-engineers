import React from 'react';
import { HashRouter, Route, Switch} from 'react-router-dom'
import Header from "./components/Header"
import Hotels from './components/Hotels';
import SectionSlider from './components/SectionSlider';

import 'core-js/stable'
import 'regenerator-runtime/runtime'


const App = () => {
  return (
      <HashRouter>
        <Header />
        <SectionSlider />
        <Hotels />
        <h1>Cassandra Summit</h1>
     </HashRouter>
  ) 
};

export default App;


