import { useState } from 'react'
import './App.css'
import Footer from './components/Footer';
import Nav from './components/Nav';
import Slider from './components/Slider';

function App() {


  return (
    <div className="App">
      <Nav/>
    <Slider/>
     <Footer/>
    </div>
  )
}

export default App;
