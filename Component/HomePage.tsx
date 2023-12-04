import { Box, Button, Center, Container, Flex, Heading, Link } from '@chakra-ui/react'
import React from 'react'
import Navbar from './Navbar/Navbar'
import Carousel from './Homepage/Carousel'

type Props = {}

function HomePage({}: Props) {
  return (<>
  <Box  width={"100%"} height={"100vh"} style={{
          backgroundImage: `url(https://images.unsplash.com/photo-1469474968028-56623f02e42e?q=80&w=2074&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center center"
        }}>
  <Navbar/>
  <Center >
            <Container width={"100%"} height={"100vh"} justifyContent={"center"} alignItems={"center"}>
            <Box  width="100%" marginTop="20">
            <Heading textShadow={  "rgb(7, 7, 7) 1px 0 10px"}
                color={"white"}>Explore Beautiful World!</Heading>
           </Box>
           <Center width={"100%"} color={"white"} marginTop={"20"}>
            <Box width={"200%"} >
            <Carousel/>

            </Box>
           </Center>
            </Container>
          
    
  </Center>
  </Box>
  </>
  )
}

export default HomePage