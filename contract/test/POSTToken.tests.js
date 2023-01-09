const { assert } = require('chai');

const POSTToken = artifacts.require('POSTToken.sol');

require('chai')
.use(require('chai-as-promised'))
.should()

contract('POSTToken', (accounts) => {
    describe('POST Token Deployment', async () => {
        it('토큰 이름이 POST MELON TOKEN 입니다.', async() => {
            let posttoken = await POSTToken.new()
            const name = await posttoken.name()
            assert.equal(name, 'POST MELON TOKEN', '토큰의 이름이 다릅니다.')
        })
    })

    describe('POST Token Deployment', async () => {
        it('토큰의 심볼이 POST 입니다.', async() => {
            let posttoken = await POSTToken.new()
            const name = await posttoken.symbol()
            assert.equal(name, 'POST', '토큰의 심볼이 다릅니다.')
        })
    })

    describe('POST Token Deployment', async () => {
        it('배포 계정에서 POSTToken 1억개를 보유합니다.', async() => {
            let posttoken = await POSTToken.new()
            const balance = await posttoken.balanceOf(accounts[0])
            assert.equal(balance.toNumber(), 100_000_000, '토큰 보유량이 다릅니다.')
        })
    })

    describe('POST Token Deployment', async () => {
        it('서버 계정에서 0개를 보유합니다.', async() => {
            let posttoken = await POSTToken.new()
            const balance = await posttoken.balanceOf(accounts[1])
            assert.equal(balance.toNumber(), 0, '토큰 보유량이 다릅니다.')
        })
    })

    describe('POST Token Deployment', async () => {
        it('다른 계정으로 토큰을 전송합니다.', async() => {
            const posttoken = await POSTToken.new();

            const accountOne = accounts[0];
            const accountTwo = accounts[1];

            const accountOneStartingBalance = (
                await posttoken.balanceOf(accountOne)
                ).toNumber();

            const accountTwoStartingBalance = (
                await posttoken.balanceOf(accountTwo)
                ).toNumber();

            const amount = 10;
            await posttoken.transfer(accountTwo, amount)

            const accountOneEndingBalance = (
                await posttoken.balanceOf(accountOne)
            ).toNumber();

            const accountTwoEndingBalance = (
                await posttoken.balanceOf(accountTwo)
            ).toNumber();

            assert.equal(
                accountOneEndingBalance,
                accountOneStartingBalance - amount,
                '토큰이 올바르게 전송되지 않았습니다.'
            );
            assert.equal(
                accountTwoEndingBalance,
                accountTwoStartingBalance - amount,
                '토큰이 올바르게 전송되지 않았습니다.'
            );

            
        })
    })

    it('배포 계정에서 서버 계정으로 Post Token를 양도합니다', async () => {
        const posttoken = await POSTToken.new();
    
        const accountOne = accounts[0];
        const accountTwo = accounts[1];
    
        await posttoken.approve(accountTwo, 7777);
        const balance = await posttoken.allowance(accountOne, accountTwo);
    
        assert.equal(
          balance.toNumber(),
          7777,
          '양도 받은 갯수가 일치하지 않습니다.'
        );
      });
    
      it('서버 계정에서 양도받은 토큰을 유저 계정으로 전송합니다.', async () => {
        const posttoken = await POSTToken.new();
    
        const deployAccount = accounts[0];
        const serverAccount = accounts[1];
        const userAccount = accounts[2];
    
        await posttoken.approve(serverAccount, 10000);
    
        await posttoken.transferFrom(deployAccount, userAccount, 123, {
          from: serverAccount,
        });
    
        const userAccountBalance = await posttoken.balanceOf(userAccount);
    
        assert.equal(
          userAccountBalance.toNumber(),
          123,
          '유저 계정의 잔고가 서버 계정에서 보낸 토큰 갯수와 일치하지 않습니다.'
        );
      });
    
})