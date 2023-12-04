import { NFTContract } from '@/Blockend/interact';
import web3 from '@/Blockend/web3';
import Navbar from '@/Component/Navbar/Navbar';
import { Box, Center, Heading, Link, Text } from '@chakra-ui/react';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react'

type Props = {}

interface User{
    userAddress:string;
}
function UserProfile({}: Props) {

    const router = useRouter();
    const { userAddress } = router.query;
    const [nftList, setNftList] = useState([]);
useEffect(() => {
  async function fetchData(){
    const accounts = await web3.eth.requestAccounts();
    const result = await NFTContract.methods.getOwnedTokens(accounts[0]).call();
    setNftList(result);
    console.log("data", nftList);
  }
  fetchData();
},[NFTContract])

  return (<>

    <Box  width={"100%"} height={"100vh"} style={{
          backgroundImage: `url(https://images.unsplash.com/photo-1483683804023-6ccdb62f86ef?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center center"
        }}>
            <Navbar/>
    <Center>
  <Heading mt={10}textShadow={  "rgb(7, 7, 7) 1px 0 10px"} color={"white"}>My NFTs</Heading>     
  </Center>
<Box mx={20}mt={10} width={"200px"}bgColor={"whiteAlpha.800"} p={10} borderRadius={10} color={"black"}>
  <Text fontSize={20}>Token ID</Text>
       {nftList?.[0]?.[0]}
  <Text fontSize={20}>Token URI</Text>
  <Link href = {nftList?.[1]?.[0]} color={"blue"} textDecor={"underline"}>
    Hotel Exclusive NFT
  </Link>
</Box>


  </Box>
  </>
  )
}

export default UserProfile