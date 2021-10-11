module.exports = {
  networks: {
    local: {
      host: "localhost",
      port: 8545,
      network_id: "*" // Match any network id
    }
  },
  compilers: {
    solc: {
      version: "0.6.0"  // ex:  "0.4.20". (Default: Truffle's installed solc)
    }
 }
};
