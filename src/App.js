import React from 'react';
import './App.css'
import { action,originals,horror,romance,Documentaries, Comedy } from "./urls"; 
import Navbar from './Components/navBar/navbar';
import Banner from './Components/Banner/Banner';
import BottomCard from './Components/BottomCard/BottomCard';

function App() {
  return (
    <div >
     <Navbar/> 
     <Banner/>
     <BottomCard url={originals} title='Netflix Originals' />
     <BottomCard url={action} title='Action' isSmall/>
     <BottomCard url={horror} title='Horror' isSmall/>
     <BottomCard url={romance} title='Romantic' isSmall/>
     <BottomCard url={Documentaries} title='Documentaries' isSmall/>
     <BottomCard url={Comedy} title='Comedy' isSmall/>
    </div>
  );
}

export default App;
