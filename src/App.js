import React from 'react';
import {Route,Routes} from 'react-router-dom';

import Header from './components/Header';


function App() {
  return (
    <>
        <Routes>
          <Route  path="/" element={<Header/>}/>
         
        </Routes>
    </>
  );
}

export default App;


/*

import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

and paste svg code there with a height and width and also remove comments from svg 

*/