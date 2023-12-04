import { Divider, Flex, Heading, Link, color, Text, Box } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdClose } from "react-icons/io";
import web3 from "../../Blockend/web3.js";
import { ConnectButton } from '@rainbow-me/rainbowkit';


const Navbar: React.FC = () => {

    web3.eth.getAccounts().then(console.log);

    const [account, setAccount] = useState("");
    const [showProfile, setShowProfile] = useState(false);

    useEffect(() => {
        const getAccount = async () => {
            const accounts = await web3.eth.getAccounts();
            setAccount(accounts[0]);
        };
        getAccount();
    }, []);

    const [showInPhone, setShowInPhone] = useState<Boolean>(false);

    const handleClick = () => {
        setShowInPhone(!showInPhone);
    }


    return <div style={{ position: "sticky", top: "0", zIndex: 1 }}>


        <Flex bg={"brand.400"}
            height="60px"
            color="white"
bgColor={"blackAlpha.700"}
            align={"center"}
            justifyContent={{ md: "space-between" }}>

            <Link href="/">
                <Flex width={"30%"}
                    marginLeft={"10"}
marginRight={"20px"}
                    fontWeight="700"
                    letterSpacing={1}
                    fontSize={"30px"}
                    color={"white"}>
Travel
                    <span style={{ color: "#a5e5ff", marginLeft:"5px" }}>Defy</span>
                </Flex>
            </Link>
            {/* <Delegate /> */}


            <Flex width={"80%"}
                justifyContent={"flex-end"}
                display={{ base: "none", md: "flex" }}
                align={"flex-end"}
                mx={2}
                marginRight={10}
            >

<Link href={`/MyProfile/${account}`} fontSize={"20px"} marginLeft="20" marginRight={"20"}>My NFTs</Link>
<Link href='/partner' fontSize={"20px"} marginLeft="20" marginRight={"20"}>Join as a Partner</Link>

<Box  bgColor={"#a5e5ff"} borderRadius={5} padding={1}>
<Text  color={"black"}>{account}</Text>

</Box>


                {/* <Link href="/Mentor/FindMentor" className='navbarLink'
                    style={{ textDecoration: "none", paddingTop: "5px" }}>Find a Mentor
                </Link>
                <Link href="/Mentor/BecomeMentor" className='navbarLink'
                    style={{ textDecoration: "none", paddingTop: "5px" }} >Become a Mentor
                </Link>

                <Link href="/RegisterMenteeForm" className='navbarLink'
                    style={{ textDecoration: "none", paddingTop: "5px" }}> My Profile
                </Link> */}
                {/* <Link href="#Projects" className='navbarLink'
                    style={{ textDecoration: "none", paddingTop: "5px" }}>Projects
                </Link> */}

                {/* <Link href="/Profile/MyProfile" className='navbarLink'
                    style={{ textDecoration: "none", paddingTop: "5px" }}>My Profile
                </Link> */}

                {/* <ConnectButton /> */}

                {/* {account ? (
                    <Box >
                        <CgProfile fontSize={30} onClick={() => setShowProfile(!showProfile)}>

                        </CgProfile>

                        {showProfile && (
                            <Box marginLeft={-40} bg={"white"} mt={10} position={"absolute"} width={"200px"} height={"200px"} >

                                <Text color={"brand.100"}>{account}</Text>
                            </Box>
                        )}
                    </Box>




                ) : (
                    // <Button >
                    //     Connect Wallet
                    // </Button>
                   
                } */}

            </Flex>



        </Flex>

        < Flex zIndex={1} display={{ md: "none" }}
            width={"100%"} position={"absolute"}
        >




        </Flex>


    </div>
}
export default Navbar;