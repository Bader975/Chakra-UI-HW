
import { SimpleGrid, Box, chakra, Flex, Link,Image, Grid, GridItem } from '@chakra-ui/react';
import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css'
import About from './components/About';


import Card from './components/Card';
import Footer from './components/Footer';
import Nav from './components/Nav';
import Slider from './components/Slider';
import Home from './components/Home';


function App() {


  return (
    <div>
     
    
    {/* Router */}
    <Routes>
  <Route path="/" element={<Home/>}></Route>
  <Route path="/about" element={<About/>}></Route>
 
</Routes>
{/* Router */}
    </div>
  )
}

export default App;
