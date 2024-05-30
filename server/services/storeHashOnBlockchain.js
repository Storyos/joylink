const Web3 = require('web3');
const web3 = new Web3('http://localhost:8545'); // 로컬 네트워크 주소
const contractAddress = '0xCf7Ed3AccA5a467e9e704C703E8D87F634fB0Fc9'; // 배포된 스마트 계약 주소
const abi = [
    // 스마트 계약 ABI (Application Binary Interface)
    {
        "inputs": [
            {
                "internalType": "string",
                "name": "dataHash",
                "type": "string"
            }
        ],
        "name": "storeData",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    }
];
const contract = new web3.eth.Contract(abi, contractAddress);

const privateKey = process.env.PRIVATE_KEY; // 트랜잭션 서명을 위한 개인 키
const account = web3.eth.accounts.privateKeyToAccount(privateKey);

const storeHashOnBlockchain = async (hash) => {
    try {
        const txData = contract.methods.storeData(hash).encodeABI();

        const tx = {
            to: contractAddress,
            data: txData,
            gas: 2000000,
        };

        const signedTx = await web3.eth.accounts.signTransaction(tx, privateKey);

        const receipt = await web3.eth.sendSignedTransaction(signedTx.rawTransaction);
        console.log('Transaction receipt:', receipt);
    } catch (error) {
        console.error('Error storing hash on blockchain:', error);
    }
};

module.exports = { storeHashOnBlockchain };
