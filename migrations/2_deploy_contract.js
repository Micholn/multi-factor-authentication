const MultiFactorAuth = artifacts.require("contracts/MultiFactorAuth.sol");

module.exports = function(deployer) {
  deployer.deploy(MultiFactorAuth);
};
