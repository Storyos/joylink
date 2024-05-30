async function main() {
    const [deployer] = await ethers.getSigners();
    console.log("Deploying contracts with the account:", deployer.address);

    const DataStorage = await ethers.getContractFactory("DataStorage");
    const dataStorage = await DataStorage.deploy();

    // console.log("Transaction hash:", dataStorage.deployTransaction.hash);
    console.log("Waiting for deployment transaction to be mined...");

    await dataStorage.waitForDeployment();  // Ethers.js 최신 버전에서는 이 메서드를 사용하여 트랜잭션 완료 대기

    const deployedAddress = await dataStorage.getAddress();  // 배포된 컨트랙트의 주소 가져오기
    console.log("DataStorage deployed to:", deployedAddress);
}

main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });
