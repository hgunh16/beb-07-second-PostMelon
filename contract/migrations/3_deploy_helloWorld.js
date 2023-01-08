var hello = artifacts.require("helloWorld.sol"); // MyNFT.sol 파일 추가

module.exports = function (deployer) {
  deployer.deploy(hello);
};
