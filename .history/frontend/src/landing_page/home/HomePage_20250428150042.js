import React from 'react';
import Hero from './Hero';
import Awards from './Awards';
import Stats from './Stats';
import Education from './Education';
import OpenAccount from '../OpenAccount';
import Navbar from '../../Navbar';
function HomePage() {
    return ( 
        <>
          <Navbar/>
          </Hero>
          <Awards/>
          <Stats/>
          <Pricing/>
          <Education/>
          <OpenAccount/>
        </>
     );
}

export default HomePage;