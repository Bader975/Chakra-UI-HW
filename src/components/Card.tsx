import { Text,Box, SimpleGrid,Image, chakra, Flex, Button, ButtonGroup, CardBody, CardFooter, Divider, Heading, Stack, Card } from '@chakra-ui/react';
import React from 'react';
// `@chakra-ui/theme` is a part of the base install with `@chakra-ui/react`
import chakraTheme from '@chakra-ui/theme'
interface CardProps{
    title?: string;
    text?: string;
    image?: string;

    
    
    }

{/* <Programers name={"Hitham"} image={"https://i0.wp.com/linkedksa.com/wp-content/uploads/2022/06/29DEA9F2-F9A5-43BE-B22F-322F36F6B757.png?fit=400%2C335&ssl=1"} companyname={"Tuwaiq Academy"} languages={"JS,C#,Java"} experience={5}/>
<Programers name={"Mahsa"} image={"https://i0.wp.com/linkedksa.com/wp-content/uploads/2022/06/29DEA9F2-F9A5-43BE-B22F-322F36F6B757.png?fit=400%2C335&ssl=1"} companyname={"Tuwaiq Academy"} languages={"Java,C++"} experience={6}/>
<Programers name={"Lamiia"} image={"https://i0.wp.com/linkedksa.com/wp-content/uploads/2022/06/29DEA9F2-F9A5-43BE-B22F-322F36F6B757.png?fit=400%2C335&ssl=1"} companyname={"Tuwaiq Academy"} languages={"Pyton,R"} experience={7}/> */}


function Cards(props:CardProps) {
  return (
    <div className="card">

      <Card maxW='md' boxShadow='xl' rounded='lg' bg='gray.600' color='white'>
  <CardBody>
    <Heading size='md' mb={'40px'} border='3px' borderColor='gray.400'  rounded='lg' boxShadow='xl'>{props.title}</Heading>

    <Image
      src={props.image}
      alt=''
      borderRadius='lx'
    />
    <Stack mt='6' spacing='6' minH='150'>
      <Text>
      {props.text}
      </Text>
      
    </Stack>
  </CardBody>
  <CardFooter>
  <Button colorScheme='red'>Show Me More</Button>
  </CardFooter>
 
</Card>

    </div>



  )
}

export default Cards;