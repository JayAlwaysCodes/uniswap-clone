// scripts/deploy.js
async function main() {
    // Retrieve the ContractFactory and Signers from the hardhat-ethers package
    const Transactions = await ethers.getContractFactory("Transactions");
    const [deployer] = await ethers.getSigners();
  
    // Deploy the contract
    const transactionContract = await Transactions.deploy();
  
    console.log("Transactions deployed to:", transactionContract.target);
  }
  
  // We recommend this pattern to be able to use async/await everywhere
  // and properly handle errors.
  main()
    .then(() => process.exit(0))
    .catch((error) => {
      console.error(error);
      process.exit(1);
    });
  