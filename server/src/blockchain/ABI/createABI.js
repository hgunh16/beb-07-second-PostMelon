const fs = require('fs').promises;

fs.readFile('../contract_json/MyNFTs.json', 'utf-8')
  .then((data) => JSON.parse(data))
  .then((data) => {
    // console.log(data.abi);
    fs.writeFile('./MyNfts.js', `module.exports=${JSON.stringify(data.abi)}`)
      .then(() => {
        console.log('nft complete');
      })
      .catch((err) => console.error(err));
  });

fs.readFile('../contract_json/MyToken.json', 'utf-8')
  .then((data) => JSON.parse(data))
  .then((data) => {
    // console.log(data.abi);
    fs.writeFile('./MyToken.js', `module.exports=${JSON.stringify(data.abi)}`)
      .then(() => {
        console.log('token complete');
      })
      .catch((err) => console.error(err));
  });