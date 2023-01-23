import React from 'react';
import { HashRouter, Route} from 'react-router-dom'
import Header from "./components/Header"
import Hotels from './components/Hotels';

const App = () => {

  return (
      <HashRouter>
        <Header />
        <Hotels />
        <h1>Cassandra Summit</h1>
     </HashRouter>
  )
    
};

export default App;


