import React from 'react';
import './App.css'
import Navbar from './Components/navBar/navbar';
import Banner from './Components/Banner/Banner';
import BottomCard from './Components/BottomCard/BottomCard';

function App() {
  return (
    <div >
     <Navbar/> 
     <Banner/>
     <BottomCard/>
    </div>
  );
}

export default App;
