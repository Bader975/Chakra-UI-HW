
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
import GPS from './components/GPS';
import Call from './components/Call';
import All from './components/All';


function App() {


  return (
    <>

    
    {/* Router */}
    <Routes>
  <Route path="/" element={<Home/>}></Route>
  <Route path="/about" element={<About/>}></Route>
  <Route path="/GPS" element={<GPS/>}></Route>
  <Route path="/call" element={<Call/>}></Route>
  <Route path="/all" element={<All/>}></Route>
 
</Routes>
{/* Router */}
    </>
  )
}

export default App;
