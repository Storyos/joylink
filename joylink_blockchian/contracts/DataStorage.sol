// contracts/DataStorage.sol
pragma solidity ^0.8.0;

contract DataStorage {
    event DataStored(string dataHash);

    function storeData(string memory dataHash) public {
        emit DataStored(dataHash);
    }
}
