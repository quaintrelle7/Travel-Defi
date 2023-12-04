import { NFTContract } from '@/Blockend/interact';
import web3 from '@/Blockend/web3';
import Navbar from '@/Component/Navbar/Navbar'
import { Button, Heading, Input, Stack } from '@chakra-ui/react';
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
  <Navbar/>
  
  <Stack alignItems={"center"} bg="whiteAlpha.100" p={10} borderRadius={10}>
                        <Heading fontSize={30} color="brand.300">Add NFT</Heading>
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
  </>
  )
}

export default PartnerProfile