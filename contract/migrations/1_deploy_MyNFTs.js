var MyNFTs = artifacts.require("MyNFTs.sol"); // MyNFT.sol 파일 추가

module.exports = async function (deployer, network, accounts) {
    await deployer.deploy(MyNFTs);
};
