require("@nomicfoundation/hardhat-toolbox");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.24",
  networks: {
    sepolia:{
      url: 'https://eth-sepolia.g.alchemy.com/v2/Ojulj2flgEePo_typCRrq3NfFenowlAI',
      accounts: ['eb34dc54e9b5008a29e2a4d546eaf8d3a3298154c19e1ea1eb61138a8b245408']
    },
  }, 

};


