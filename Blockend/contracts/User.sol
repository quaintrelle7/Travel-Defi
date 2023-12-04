// SPDX-License-Identifier: GPL-3.0

pragma solidity >=0.8.2 <0.9.0;

contract UserRegistration{

    struct User{
        string name;
        address userAddress;

    }

    User[] public userList;

    mapping(address => bool) public isUser;

    event UserRegistered(address userAddress, string name);
    event UserRemoved(address userAddress, string name);

    function registerUser(string memory _name) external {
        require(!isUser[msg.sender], "You already regsitered as a Travel Defy User");
        userList.push(User(_name, msg.sender ));
        isUser[msg.sender] = true;
        emit UserRegistered(msg.sender, _name);

    }

     function removeUser() external {
        require(isUser[msg.sender], "You are not registered as a User.");
        delete isUser[msg.sender];
        string memory userName;
        
        for (uint256 i = 0; i < userList.length; i++) {
            if (userList[i].userAddress == msg.sender) {
                userName = userList[i].name;
                userList[i] = userList[userList.length - 1];
                userList.pop();
                break;
            }
        }
        
        emit UserRemoved(msg.sender, userName);
    }
    
    function getUserCount() external view returns(uint256) {
        return userList.length;
    }

    function getUserByIndex(uint256 _index) external view returns (string memory, address){

        require(_index < userList.length, "Invalid User Index");
        User memory user = userList[_index];
        return (user.name, user.userAddress);

    }

    function getUserList() external view returns (User[] memory){
        return userList;
    }
}