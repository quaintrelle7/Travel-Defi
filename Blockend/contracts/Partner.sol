// SPDX-License-Identifier: GPL-3.0

pragma solidity >=0.8.2 <0.9.0;

contract TravelPartnerRegistration{

    struct Partner{
        string name;
        string description;
        string partnerType;
        string imageURL;
        address partnerAddress;

    }

    Partner[] public partnerList;

    mapping(address => bool) public isPartner;

    event PartnerRegistered(address partnerAddress, string name);
    event PartnerRemoved(address partnerAddress, string name);

    function registerPartner(string memory _name, string memory _description, string memory _partnerType, string memory _imageURL ) external {
        require(!isPartner[msg.sender], "You already regsitered as a travel partner");
        partnerList.push(Partner(_name, _description, _partnerType, _imageURL, msg.sender ));
        isPartner[msg.sender] = true;
        emit PartnerRegistered(msg.sender, _name);

    }

     function removePartner() external {
        require(isPartner[msg.sender], "You are not registered as a mentor.");
        delete isPartner[msg.sender];
        string memory partnerName;
        
        for (uint256 i = 0; i < partnerList.length; i++) {
            if (partnerList[i].partnerAddress == msg.sender) {
                partnerName = partnerList[i].name;
                partnerList[i] = partnerList[partnerList.length - 1];
                partnerList.pop();
                break;
            }
        }
        
        emit PartnerRemoved(msg.sender, partnerName);
    }
    
    function getPartnerCount() external view returns(uint256) {
        return partnerList.length;
    }

    function getPartnerByIndex(uint256 _index) external view returns (string memory, string memory, string memory, string memory, address){

        require(_index < partnerList.length, "Invalid Partner Index");
        Partner memory partner = partnerList[_index];
        return (partner.name, partner.description, partner.partnerType, partner.imageURL, partner.partnerAddress);

    }

    function getPartnerList() external view returns (Partner[] memory){
        return partnerList;
    }
}