const POSTToken = artifacts.require('POSTToken.sol');
const MyNFT = artifacts.require('MyNFTs.sol');

contract('MyNFT', (accounts) => {
  it('NFT의 이름이 MyNFTs입니다.', async () => {
    const NFTinstance = await MyNFT.deployed();
    const NFTName = await NFTinstance.name();
    assert.equal(NFTName, 'MyNFTs', 'NFT의 이름이 다릅니다.');
  });

  it('NFT의 심볼이 MNFT입니다', async () => {
    const NFTinstance = await MyNFT.deployed();
    const NFTName = await NFTinstance.symbol();
    assert.equal(NFTName, 'MNFT', 'NFT의 심볼이 다릅니다.');
  });

  it('Token 주소와 NFT를 발행할 수 있는 Token의 주소가 일치합니다.', async () => {
    const Tokeninstance = await POSTToken.deployed();
    const NFTinstance = await MyNFT.deployed();

    await NFTinstance.setToken(Tokeninstance.address);
    const NFTtokenAdress = await NFTinstance.tokenAdress();
    assert.equal(
      Tokeninstance.address,
      NFTtokenAdress,
      '토큰 주소가 일치하지 않습니다.'
    );
  });

  it('유저 계정의 POST 토큰 20개로 NFT를 민팅할 수 있습니다.', async () => {
    const Tokeninstance = await POSTToken.deployed();
    const NFTinstance = await MyNFT.deployed();

    const deployAccount = accounts[0];
    const serverAccount = accounts[1];
    const userAccount = accounts[2];

    //메타데이터 생성
    const metaData = {
      name: 'testNFT',
      description: 'this is test NFT',
    };

    //서버 계정에 양도;
    await Tokeninstance.approve(serverAccount, 10000);

    //유저에게 토큰 전송
    await Tokeninstance.transferFrom(deployAccount, userAccount, 100, {
      from: serverAccount,
    });

    //초기 token 보유량
    const startingTokenbalance = await Tokeninstance.balanceOf(userAccount);
    //초기 NFT 보유량
    const startingNFTbalance = await NFTinstance.balanceOf(userAccount);

    //유저가 NFT 컨트랙트 계정에 토큰 양도
    await Tokeninstance.approve(NFTinstance.address, 100, {
      from: userAccount,
    });

    //ERC20 토큰 설정
    await NFTinstance.setToken(Tokeninstance.address);

    //NFT 민팅
    await NFTinstance.mintNFT(userAccount, metaData, {
      from: serverAccount,
    });

    //NFT 발행 후 token 보유량
    const endTokenbalance = await Tokeninstance.balanceOf(userAccount);
    //NFT 발행 후 NFT 보유량
    const endNFTbalance = await NFTinstance.balanceOf(userAccount);

    assert.equal(
      endTokenbalance.toNumber(),
      startingTokenbalance.toNumber() - 20,
      '유저 계정의 토큰 잔고가 일치하지 않습니다.'
    );

    assert.equal(
      endNFTbalance.toNumber(),
      startingNFTbalance.toNumber() + 1,
      '유저 계정의 NFT 민팅이 실패하였습니다.'
    );
  });

  it('유저 계정의 POST 토큰 20개로 NFT를 민팅할 수 있습니다.2', async () => {
    const Tokeninstance = await POSTToken.deployed();
    const NFTinstance = await MyNFT.deployed();

    const deployAccount = accounts[0];
    const serverAccount = accounts[1];
    const userAccount = accounts[3];

    const metaData = {
      name: 'testNFT',
      description: 'this is test NFT',
    };

    await Tokeninstance.approve(serverAccount, 10000);

    await Tokeninstance.transferFrom(deployAccount, userAccount, 100, {
      from: serverAccount,
    });

    await Tokeninstance.approve(NFTinstance.address, 100, {
      from: userAccount,
    });

    await NFTinstance.setToken(Tokeninstance.address);

    await NFTinstance.mintNFT(userAccount, metaData, {
      from: serverAccount,
    });

    const userAccountNFTBalance = await NFTinstance.balanceOf(userAccount, {
      from: userAccount,
    });

    assert.equal(
      userAccountNFTBalance.toNumber(),
      1,
      '유저 계정의 NFT 민팅에 실패하였습니다.'
    );
  });
});