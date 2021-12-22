const HDWalletProvider = require("truffle-hdwallet-provider");

module.exports = {
  networks: {
    development: {
      host: "127.0.0.1",
      port: 8545,
      network_id: "*" // Match any network id
    },
    // rinkeby: {
    //   provider: function() {
    //     return new HDWalletProvider("mix embody outside ticket orbit certain morning aerobic erase what layer outer", "https://rinkeby.infura.io/v3/9aa3d95b3bc440fa88ea12eaa4456161");
    //   },
    //   network_id: 4,
    //   gas: 4500000,
    //   gasPrice: 10000000000,
    // }
  }
};