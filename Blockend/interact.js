import web3 from "./web3";

const PartnerAbi = require("./build/partner.json");
const NFTAbi = require("./build/nft.json");
const UserAbi = require("./build/user.json");

const partnerContractAddress = "0x698e9d8c3dc156bbb4be95e8300b3c30212845e0";

const NFTContractAddress = "0xdc29b0d7fcb57c25a19acb9509a9af7a0145459d";

const userContractAddress= "0xd02ca68f3ddf77aabc5871cb7c7f9f26a41ca761";

export const PartnerContract = new web3.eth.Contract(PartnerAbi, partnerContractAddress);

export const NFTContract = new web3.eth.Contract(NFTAbi, NFTContractAddress);

export const UserContract = new web3.eth.Contract(UserAbi, userContractAddress);