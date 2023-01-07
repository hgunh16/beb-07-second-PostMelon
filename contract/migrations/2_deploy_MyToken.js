var MyToken = artifacts.require("MyToken.sol"); // MyNFT.sol 파일 추가

module.exports = function (deployer) {
  deployer.deploy(MyToken, "dmTestToken", "DMT");
};
