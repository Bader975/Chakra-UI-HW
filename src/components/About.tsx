import React from 'react'
import { SimpleGrid, Box, chakra, Flex, Link,Image, Grid, GridItem,Text } from '@chakra-ui/react';

import Nav from './Nav'
import Footer from './Footer';

function About() {
  return (
    <div className="about">
        <Nav/>
        <Image
  borderRadius='full'
  boxSize='full'
  src='https://riyadhseason.sa/img/e1.svg'
  alt='Dan Abramov'
/>
<Text fontSize='3xl' p={20} >Saudi Arabia, officially the Kingdom of Saudi Arabia (KSA), is a country in Western Asia. It covers the bulk of the Arabian Peninsula,
                 and has a land area of about 2,150,000 km2 (830,000 sq mi), making it the fifth-largest country in Asia, 
                 the second-largest in the Arab world, and the largest in Western Asia and the Middle East</Text>



                 <Footer/>
          </div>

 
  )
}

export default About


fetch("https://fakestoreapi.com/products", {
  "method": "GET",
})
