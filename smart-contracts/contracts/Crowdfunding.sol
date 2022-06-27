// SPDX-License-Identifier: GPL-3.0
pragma solidity >=0.7.0 <0.9.0;

interface IERC721Votes {
    function getPastVotes(address, uint256) external view returns (uint256);
}
