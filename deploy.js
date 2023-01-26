// 7:08:42

const ethers = require('ethers');
const fs = require('fs-extra');

async function main() {
    // http://127.0.0.1:7545
    // connecting to the local blockchain rpc via Json provider
    const provider = new ethers.providers.JsonRpcProvider("http://127.0.0.1:7545");
    const wallet = new ethers.Wallet(
        "ccc5e0db1e4a7342f5cb0db2f752c41b1819e42129dddff80f88647cd4d8fb6c",
        provider
    );
    // fs is used to read the output files created
    const abi = fs.readFileSync("./_SimpleStorage_sol_SimpleStorage.abi", "utf8");
    const binary = fs.readFileSync("./_SimpleStorage_sol_SimpleStorage.bin", "utf8");

    const contractFactory = new ethers.ContractFactory(abi, binary, wallet);
    console.log("Deploying please wait....")

    const contract = await contractFactory.deploy();
    console.log(contract);
}

main()
    .then(() => process.exit(0))
    .catch((error) => {console.log(error)});