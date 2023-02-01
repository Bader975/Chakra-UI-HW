
import { SimpleGrid, Box } from '@chakra-ui/react';
import { useState } from 'react'
import './App.css'

import Card from './components/Card';
import Footer from './components/Footer';
import Nav from './components/Nav';
import Slider from './components/Slider';


function App() {


  return (
    <div className="App">
      <Nav/>
    <Slider/>
    {/* Cards */}
 
 
    <div className="card-container">
    <Card title={"Riyadh- BLVD WORLD"} image={"https://riyadhmarkets.com/wp-content/uploads/2022/10/1-2.jpg"} text={"The Boulevard World complex in Riyadh is one of the largest and most famous entertainment areas that will be opened in the Kingdom of Saudi Arabia, as this complex will include a wide variety of restaurants and cafes "}/>
    <Card title={"Jeddah- Red Sea Marina"} image={"https://arabtripper.com/wp-content/uploads/2022/11/cable-wreck-jeddah.jpg"} text={"You can rent a boat at the Red Sea Marina or dive under its azure waters. Perhaps you prefer to enjoy a weekend day by going to the sea to watch the sunset"}/>
    <Card title={"KSA- King Abdulaziz Falconry Festival"} image={"https://www.eligasht.com/Blog/wp-content/uploads/2022/09/The-King-Abdulaziz-Falconry-Festival.jpg"} text={" It is an annual international festival organized by the Saudi Falcon Club. This festival holds many world records and is mostly held in the cooler seasons of the year. The participants in this festival are the owners of trained falcons who compete in catching wild animals"}/>
    
    </div>
    <div className="card-container">
    <Card title={"Wadi Al-Dawasir-Al-Faw"} image={"https://upload.wikimedia.org/wikipedia/commons/thumb/3/31/Pergamon-Museum_-_Bronzekopf.jpg/390px-Pergamon-Museum_-_Bronzekopf.jpg"} text={"“Al-Faw” is one of the most important archaeological sites in the Kingdom and the Arabian Peninsula, as it dates back to pre-Islam, and is distinguished for being - in the past - an important trade center and a meeting place for caravans carrying minerals, grains and textiles, and it has more than 17 wells "}/>
    <Card title={"Al-Qassim-Buraydah water tower"} image={"https://www.urtrips.com/wp-content/uploads/2022/11/Buraidah-Tower.jpg"} text={"Buraydah Water Tower, one of the most prominent tourist attractions in the city, is open to visitors during the summer for free"}/>
    <Card title={"Najran- AL ALkhdod"} image={"https://vid.alarabiya.net/images/2018/06/21/7204c064-6e02-47a1-9d52-f87ab96d600f/7204c064-6e02-47a1-9d52-f87ab96d600f.jpg?crop=4:3&width=1200"} text={" It is an annual international festival organized by the Saudi Falcon Club. This festival holds many world records and is mostly held in the cooler seasons of the year. The participants in this festival are the owners of trained falcons who compete in catching wild animals"}/>
    
    </div>

     <Footer/>
    
    </div>
  )
}

export default App;
