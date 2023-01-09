//Contract based on [<https://docs.openzeppelin.com/contracts/3.x/erc721>](<https://docs.openzeppelin.com/contracts/3.x/erc721>)
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/utils/Counters.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import "./POSTToken.sol";

contract MyNFTs is ERC721URIStorage, Ownable {
    using Counters for Counters.Counter;
    Counters.Counter private _tokenIds;
    POSTToken token;
    uint256 nftPrice;

    constructor() ERC721("MyNFTs", "MNFT") {
        nftPrice = 100e18;
    }

    function mintNFT(address recipient, string memory tokenURI) public onlyOwner returns (uint256) {
        require(token.balanceOf(recipient) > nftPrice);

        token.transferFrom(recipient, msg.sender, nftPrice);
        
        _tokenIds.increment();
        uint256 newItemId = _tokenIds.current();
        _mint(recipient, newItemId);
        _setTokenURI(newItemId, tokenURI);

        return newItemId;
    }

    function setToken (address tokenAddress) public onlyOwner returns (bool) {
        require(tokenAddress != address(0x0));
        token = POSTToken(tokenAddress);
        return true;
    }

    function setNftPrice (uint256 value) public onlyOwner returns (bool) {
        nftPrice = value;
        return true;
    }

    function getNftPrice () public onlyOwner returns (uint256) {
        return nftPrice;
    }
    
}