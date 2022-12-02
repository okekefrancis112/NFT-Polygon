
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;

import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/utils/Counters.sol";

contract NFT is ERC721URIStorage{
    using Counters for Counters.Counter;

    Counters.Counter private _myCounter;
    uint256 MAX_SUPPLY = 50;

    // constructor() ERC721("CRYPTOPUNKS", "C") {}
    // constructor() ERC721("Azuki", "AZUKI") {}
    // constructor() ERC721("BoredApeYachtClub", "BAYC") {}
    // constructor() ERC721("CloneX", "CloneX") {}
    // constructor() ERC721("Cool Cats", "COOL") {}
    // constructor() ERC721("Cryptoadz", "TOADZ") {}
    // constructor() ERC721("Doodles", "DOODLE") {}
    // constructor() ERC721("MutantApeYachtClub", "MAYC") {}
    // constructor() ERC721("VeeFriends", "VFT") {}
    constructor() ERC721("World Of Women", "WOW") {}

    function safeMint(address to, string memory uri) public{

        uint256 tokenId = _myCounter.current();
        require(tokenId <= MAX_SUPPLY, "Sorry, all NFTs have been minted!");
        _myCounter.increment();
        _safeMint(to, tokenId);
        _setTokenURI(tokenId, uri);

    }
}
