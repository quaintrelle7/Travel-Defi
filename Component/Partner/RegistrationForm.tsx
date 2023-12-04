import {
    Button, Center,
    Flex,
    FormLabel,
    Heading,
    Input,
    Stack,
    Text,
    Textarea
} from '@chakra-ui/react';
import React from 'react';

import { useEffect, useState } from 'react';
import { PartnerContract } from "../../Blockend/interact";
import web3 from '../../Blockend/web3';

type RegistrationFormProps = {

};

const RegistrationForm: React.FC<RegistrationFormProps> = () => {

    const [name, setName] = useState('');
    const [partnerType, setPartnerType] = useState('');
    const [description, setDescription] = useState('');
    const[imageURL, setImageURL] = useState('');
    const [partnerAddress, setPartnerAddress] = useState('');
    const [account, setAccount] = useState("");


    useEffect(() => {
        const getAccount = async () => {
            const accounts = await web3.eth.getAccounts();
            setAccount(accounts[0]);
            setPartnerAddress(account);
        };
        getAccount();
    }, []);


    const [errors, setErrors] = useState({});

    const [buttonText, setButtonText] = useState("Register");

    // Setting success or failure messages states
    const [showSuccessMessage, setShowSuccessMessage] = useState(false);
    const [showFailureMessage, setShowFailureMessage] = useState(false);


    const handlePartnerRegistration = async (e: React.FormEvent) => {
        e.preventDefault();

        if (PartnerContract && name && description && partnerType && imageURL) {
            setButtonText("Registering");

            try {
                const accounts = await web3.eth.getAccounts();
                await PartnerContract.methods.registerPartner(name, description, partnerType, imageURL).send({ from: accounts[0] });
                console.log('Partner registered successfully!');
                setShowSuccessMessage(true);
                setShowFailureMessage(false);
                setName("");
                setDescription("");
                setPartnerType("");
                setImageURL
                setButtonText("Register");
                console.log(name, partnerType, partnerAddress, description);
            } catch (error) {
                setShowSuccessMessage(false);
                setShowFailureMessage(true);
                setButtonText("Send");
                console.error(error);
            }
        }
    };

    return (

        <>
         
            <Flex bg="brand.100" width={"100%"} justifyContent={"center"} paddingTop={20}>
                <Heading fontSize={"30px"} color="blackAlpha.700">Register as a Travel Partner</Heading>
            </Flex>
            <Center bg="brand.100" color={"black"} width={"100%"} height={"780px"} mt={-20} overflow={"initial"}>
                
                <Stack alignItems={"center"} bg="whiteAlpha.500" p={10} borderRadius={10}>
                    <br></br>
                    <br></br>

                    <form onSubmit={handlePartnerRegistration}>
                        <Stack>

                            <Flex>  <Stack flexGrow={1}>



                                <FormLabel htmlFor='name'> Name</FormLabel>
                                <Input type='text' value={name}
                                    onChange={(e) => {
                                        setName(e.target.value);
                                    }}
                                    name="name" />

                            </Stack>

                                <Stack marginLeft={5} flexGrow={1}>
                                    <FormLabel htmlFor='title'>Partner Type</FormLabel>
                                    <Input type="text"
                                        name="title"
                                        value={partnerType}
                                        placeholder='Agency/Hotel'
                                        onChange={(e) => {
                                            setPartnerType(e.target.value);
                                        }} />
                                </Stack></Flex>



                            {/* <FormLabel htmlFor='subject'>Provide Image URL</FormLabel> */}
                            {/* <Input type="text"
                                name="subject"
                                value={image}
                                onChange={(e) => {
                                    setImage(e.target.value);
                                }} /> */}
                            <FormLabel htmlFor='address'>Wallet Address</FormLabel>
                            <Text>{account}</Text>
                            <FormLabel htmlFor='image'>Image URL</FormLabel>
                            <Input type="text"
                                        name="image"
                                        value={imageURL}
                                        placeholder='Paste Image URL'
                                        onChange={(e) => {
                                            setImageURL(e.target.value);
                                        }} />

                            <FormLabel htmlFor='message'>Add Description</FormLabel>
                            <Textarea name="message"
                                value={description}
                                onChange={(e) => {
                                    setDescription(e.target.value);
                                }} maxHeight={"250px"} />



                            <Button  type='submit' >{buttonText}</Button>



                            {showSuccessMessage && <Text align={"center"} color={"green.400"} fontWeight={600}>Partner Registered Successfully!</Text>}
                            {showFailureMessage && <Text align={"center"} color={"red"} fontWeight={400}>Could not register you, please connect to Metachain and check balance and try again!</Text>}
                        </Stack>

                        {/* <FormHelperText>We'll never share your email.</FormHelperText> */}
                    </form>
                </Stack>
            </Center>
        </>
    )
}
export default RegistrationForm;