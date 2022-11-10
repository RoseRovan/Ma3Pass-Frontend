
import './App.css';
import React from 'react';
import {Route, Routes} from "react-router-dom"
import { LandingPage } from './landing';
import { SelectBus } from './selectbus';


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element = {<LandingPage/>}/>
        <Route path='/selectbus' element= {<SelectBus/>}/>
      </Routes>
    </div>
  );
}

export default App;
