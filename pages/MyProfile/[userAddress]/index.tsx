import { NFTContract } from '@/Blockend/interact';
import web3 from '@/Blockend/web3';
import { Box } from '@chakra-ui/react';
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
          backgroundImage: `url(https://images.unsplash.com/photo-1452421822248-d4c2b47f0c81?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center center"
        }}>
  {nftList && nftList?.map((nft:any) => (
    <div key={nft?.tokenID}>
      <p>{nft?.tokenID}</p>
      <p>{nft?.tokenURI}</p>
    </div>
  ))}
  </Box>
  </>
  )
}

export default UserProfile