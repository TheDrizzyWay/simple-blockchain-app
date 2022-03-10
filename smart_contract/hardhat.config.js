require("@nomiclabs/hardhat-waffle");
require("dotenv").config();


/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
  solidity: "0.8.0",
  networks: {
    ropsten: {
      url: process.env.HARDHAT_NETWORK_URL,
      accounts: [process.env.ETH_PRIVATE_KEY]
    }
  }
};
