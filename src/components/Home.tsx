import { Button, ButtonGroup, Card, CardBody, CardFooter, Divider, Heading, Stack,Image,Text } from '@chakra-ui/react'
import React from 'react'

// import { SimpleGrid, Box, chakra, Flex, Link, Grid, GridItem } from '@chakra-ui/react';
import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import '../App.css'
import About from './About';
import Cards from './Card';
import Footer from './Footer';
import Nav from './Nav';
import Slider from './Slider';
import Home from './Home';
import { Box, SimpleGrid } from '@chakra-ui/react';
import GPS from './GPS';
import { Status, Wrapper } from '@googlemaps/react-wrapper';
import Click from './Click';

function home() {
  return (
    <div className="home">
<Nav/>

{/* <Click/> */}
    
  <Slider/>
  {/* Cards */}


  <SimpleGrid minChildWidth='350px'spacingX='10' spacingY='300px'  columns={{ base: 1, md: 2, lg: 2 }}
          spacing={20}
          px={{ base: 1, lg: 16, xl: 24 }}
          py={5}
          mx="auto"
          my={20}
          >
   <Cards title={"Riyadh- BLVD WORLD"} image={"https://riyadhmarkets.com/wp-content/uploads/2022/10/1-2.jpg"} text={"The Boulevard World complex in Riyadh is one of the largest and most famous entertainment areas that will be opened in the Kingdom of Saudi Arabia, as this complex will include a wide variety of restaurants and cafes "}/>
 <Cards title={"Jeddah- Red Sea Marina"} image={"https://arabtripper.com/wp-content/uploads/2022/11/cable-wreck-jeddah.jpg"} text={"You can rent a boat at the Red Sea Marina or dive under its azure waters. Perhaps you prefer to enjoy a weekend day by going to the sea to watch the sunset"}/>
 <Cards title={"KSA- King Abdulaziz Falconry Festival"} image={"https://www.eligasht.com/Blog/wp-content/uploads/2022/09/The-King-Abdulaziz-Falconry-Festival.jpg"} text={" It is an annual international festival organized by the Saudi Falcon Club. This festival holds many world records and is mostly held in the cooler seasons of the year. The participants in this festival are the owners of trained falcons who compete in catching wild animals"}/>
 <Cards title={"Wadi Al-Dawasir-Al-Faw"} image={"https://upload.wikimedia.org/wikipedia/commons/thumb/3/31/Pergamon-Museum_-_Bronzekopf.jpg/390px-Pergamon-Museum_-_Bronzekopf.jpg"} text={"“Al-Faw” is one of the most important archaeological sites in the Kingdom and the Arabian Peninsula, as it dates back to pre-Islam, and is distinguished for being - in the past - an important trade center and a meeting place for caravans carrying minerals "}/>
 <Cards title={"Al-Qassim-Buraydah water tower"} image={"https://www.urtrips.com/wp-content/uploads/2022/11/Buraidah-Tower.jpg"} text={"Buraydah Water Tower, one of the most prominent tourist attractions in the city, is open to visitors during the summer for free"}/>
   
  <Cards title={"Najran- AL ALkhdod"} image={"https://vid.alarabiya.net/images/2018/06/21/7204c064-6e02-47a1-9d52-f87ab96d600f/7204c064-6e02-47a1-9d52-f87ab96d600f.jpg?crop=4:3&width=1200"} text={" It is an annual international festival organized by the Saudi Falcon Club. This festival holds many world records and is mostly held in the cooler seasons of the year. The participants in this festival are the owners of trained falcons who compete in catching wild animals"}/>
  
  
  
</SimpleGrid>

 


 
 
 

  {/* </div> */}
  {/* <div className="card-container"> */}
 
 
 
 
  {/* </div> */}



   <Footer/>
   </div>
  )
}

export default home;