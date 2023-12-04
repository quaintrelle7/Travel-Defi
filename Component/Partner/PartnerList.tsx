import { PartnerContract } from '@/Blockend/interact';
import web3 from '@/Blockend/web3';
import { Box, Center, Container, Flex, Heading, Link } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import PartnerTile from './PartnerTile';

type Partner = {
    name: string,
    description: string,
    partnerType:string,
    imageURL:string,
    partnerAddress:string
}
type Props = {}

function PartnerList({}: Props) {
    
    const [partnerList, setPartnerList] = useState([]);
    useEffect(() => {
        async function fetchData() {
            const accounts = await web3.eth.requestAccounts();
            const result = await PartnerContract.methods.getPartnerList().call();
            setPartnerList(result);
            console.log("data", partnerList);
        }
        fetchData();
    }, [PartnerContract]);

  return (<>
 <Center>
 <Heading textShadow={  "rgb(7, 7, 7) 1px 0 10px"}
                color={"white"}>Explore Travel Partners!</Heading></Center> 
 <Center >     
  <Flex padding={20}>
    {partnerList&& partnerList.map((partner:Partner) => (
      <Link href={`/PartnerPortal/${partner.partnerAddress}`} key={partner?.partnerAddress}>
          <PartnerTile key={partner?.partnerAddress} partner={partner}/>
      </Link>
       
    ))}
  </Flex>
  </Center>
  </>
  )
}

export default PartnerList