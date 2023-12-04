import Navbar from '@/Component/Navbar/Navbar'
import RegistrationForm from '@/Component/Partner/RegistrationForm'
import { Box, Center, Flex, Heading, Link, Text } from '@chakra-ui/react'
import React from 'react'

type Props = {}

function partner({}: Props) {
  return (
    <>
    <Box  width={"100%"} height={"100vh"} style={{
          backgroundImage: `url(https://images.unsplash.com/photo-1596394516093-501ba68a0ba6?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center center"
        }}>
       <Navbar/>

          <Flex>
            <Box width={"50%"}>
            <RegistrationForm/>
            </Box>
            <Box marginLeft={20} width={"50%"} paddingTop={20}>
           <Box bg={"whileAlpha.500"}>
           <Heading fontSize={"30px"}color={"blackAlpha.700"}>Already a Travel Partner?</Heading>
           <Box  marginTop={7}>
           <Link textDecoration={"underline"} fontWeight={"bold"}>Click here!</Link>
           </Box>
           </Box>
            </Box>
          </Flex>
     
    </Box>
   
    </>
  )
}

export default partner