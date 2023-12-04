import { NFTContract } from '@/Blockend/interact';
import web3 from '@/Blockend/web3';
import Navbar from '@/Component/Navbar/Navbar'
import { Box, Button, Center, Heading, Input, Stack } from '@chakra-ui/react';
import React, { useState } from 'react'

type Props = {}

function PartnerProfile({}: Props) {
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const [showFailureMessage, setShowFailureMessage] = useState(false);
  const [toAddress, setToAddress] = useState("");
  const [tokenURI, setTokenURI] = useState("");

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

try {
        const accounts = await web3.eth.getAccounts();
        // Call the mintNFT function
        await NFTContract.methods.mintNFT(toAddress, tokenURI).send({ from: accounts[0] });

        console.log("NFT minted successfully");
    } catch (error) {
        console.error("Error minting NFT:", error);
    }
};
  return (<>
   <Box  width={"100%"} height={"100vh"} style={{
          backgroundImage: `url(https://images.unsplash.com/photo-1452421822248-d4c2b47f0c81?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center center"
        }}>
  <Navbar/>
  <Center>
  <Stack alignItems={"center"} bg="blackAlpha.700" p={10} borderRadius={10} color={"white"} width={"500px"} mt={20}>
                        <Heading fontSize={30} color="white">Add NFT</Heading>
                        <form onSubmit={handleSubmit}>

                            <label>
                                To Address:
                                <Input type="text" value={toAddress} onChange={(e) => setToAddress(e.target.value)} />
                            </label>
                            <br />
                            <label>
                                Token URI:
                                <Input type="text" value={tokenURI} onChange={(e) => setTokenURI(e.target.value)} />
                            </label>
                            <br />
                            <br />
                            <Button width={"100%"} bgColor={"#a5e5ff"}  type="submit">Mint NFT</Button>
                        </form>
                    </Stack>
                    </Center>
                    </Box>
  </>
  )
}

export default PartnerProfile