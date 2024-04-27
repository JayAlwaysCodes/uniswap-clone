import { HardhatRuntimeEnvironment } from 'hardhat/types';
import { task } from 'hardhat/config';

const main = async (hre: HardhatRuntimeEnvironment): Promise<void> => {
    // Retrieve the ContractFactory and Signer from the Hardhat Runtime Environment
    const { ethers } = hre;
    const { getContractFactory, getSigners } = ethers;

    // Get the signer (assuming it's the first account)
    const signers = await getSigners();
    const signer = signers[0];

    // Deploy the Transactions contract
    const transactionFactory = await getContractFactory('Transactions', signer);
    const transactionContract = await transactionFactory.deploy();

    // Wait for the contract to be mined
    await transactionContract.deployed();

    // Log contract address
    console.log('Transactions deployed to:' transactionContract.address);
};

task('deploy-contract', 'Deploys the Transactions contract')
    .setAction(async (_, hre) => {
        try {
            await main(hre);
            process.exit(0);
        } catch (error) {
            console.error(error);
            process.exit(1);
        }
    });
