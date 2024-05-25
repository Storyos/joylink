const Web3 = require('web3');
require('dotenv').config();

const web3 = new Web3('http://localhost:8545'); // 로컬 네트워크 주소
const privateKey = process.env.PRIVATE_KEY; // 개인 키
const account = web3.eth.accounts.privateKeyToAccount(privateKey);

const checkBalance = async () => {
    const balance = await web3.eth.getBalance(account.address);
    console.log(`Balance of ${account.address}: ${web3.utils.fromWei(balance, 'ether')} ETH`);
};


module.exports={checkBalance};