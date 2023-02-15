require("@nomicfoundation/hardhat-toolbox");

module.exports = {
  solidity: '0.8.17',
  networks: {
    goerli: {
      url: PUT_YOUR_QUICKNODE_URL,
      accounts: PUT_YOUR_PRIVATE_KEYaccounts
    },
  },
};