import {
  Stack,
  Heading,
  Text,
  Image,
  Box,
  SimpleGrid,
  Container,
  Flex,
  Center
} from "@chakra-ui/react";
import React from "react";
import { AiFillStar } from "react-icons/ai";
type Props = {
  partner:{
    name: string,
    description: string,
    partnerType:string,
    imageURL:string,
    partnerAddress:string

  }
};

function PartnerTile({ partner }: Props) {
  return (
    <>
      <Box
       marginBottom={10}
       marginRight={20}
        filter={"auto"}
        brightness={"100%"}
        boxShadow={
          "rgba(9, 30, 66, 0.25) 0px 4px 8px -2px, rgba(9, 30, 66, 0.08) 0px 0px 0px 1px"
        }
        width={"500px"}
        height={{
          base: "40vw",
          sm: "40vw",
          md: "28vw",
          lg: "20vw",
          xl: "17vw"
        }}
        borderRadius={"1.5rem"}
        className="placeTileOuterContainer"
        style={{
          backgroundImage: `url(${partner.imageURL})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center center"
        }}
      >
        <Stack>
          <Flex className="topFeatures" m={2} justifyContent={"space-between"} bgColor={"whiteAlpha.200"} fontWeight={"500"} >
            <div style={{ display: "flex" }}>
              {partner.partnerAddress}{" "}
            </div>

            <span>
              {partner?.partnerType}
            </span>
          </Flex>
          <Center bgColor={"#a5e5ff"}  mt={"3vw"} py={2}>
            <Text fontSize={"30"}fontWeight="700"className="placeName">{partner.name}</Text>
          </Center>
          <Center bgColor={"#a5e5ff"}  mt={"-3"} className="stateName" padding={2}>
            <Text>{partner.description}</Text>
          </Center>
        </Stack>
      </Box>
      {/* <>
        {(() => {
          const arr = [];
          for (let i = 0; i < 6; i++) {
            arr.push(
            
            );
          }
          return arr;
        })()}
      </> */}
    </>
  );
}

export default PartnerTile;