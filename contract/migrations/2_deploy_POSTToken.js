const POSTToken = artifacts.require('POSTToken.sol');

module.exports = async function (deployer, network, accounts) {
    await deployer.deploy(POSTToken)
}