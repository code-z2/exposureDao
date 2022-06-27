// SPDX-License-Identifier: GPL-3.0
pragma solidity >=0.7.0 <0.9.0;

interface IERC721Votes {
    function getPastVotes(address, uint256) external view returns (uint256);
}

contract Funding {
    event Voted(
        address indexed voter,
        uint256 indexed project,
        uint256 weight,
        uint256 proposalVotes
    );

    struct Project {
        bytes32 name;
        uint256 voteCount;
    }

    mapping(address => uint256) public spentVotePower;

    Project[] public projects;
    IERC721Votes public voteToken;
    uint256 public referenceBlock;

    constructor(
        bytes32[] memory proposalNames,
        address _voteToken
    ) {
        for (uint256 i = 0; i < proposalNames.length; i++) {
            projects.push(Project({name: proposalNames[i], voteCount: 0}));
        }
        voteToken = IERC721Votes(_voteToken);
        referenceBlock = block.number;
    }

     function vote(uint256 project, uint256 amount) external {
        uint256 votingPowerAvailable = votingPower(); 
        require(votingPowerAvailable >= amount, "Has not enough voting power");
        spentVotePower[msg.sender] += amount;
        projects[project].voteCount += amount;
        emit Voted(msg.sender, project, amount, projects[project].voteCount);
    }

    function winningProposal() public view returns (uint256 winningProposal_) {
        uint256 winningVoteCount = 0;
        for (uint256 p = 0; p < projects.length; p++) {
            if (projects[p].voteCount > winningVoteCount) {
                winningVoteCount = projects[p].voteCount;
                winningProposal_ = p;
            }
        }
    }

    function winnerName() external view returns (bytes32 winnerName_) {
        winnerName_ = projects[winningProposal()].name;
    }

    function votingPower() public view returns (uint256) {
        return voteToken.getPastVotes(
            msg.sender,
            referenceBlock
        ) - spentVotePower[msg.sender];
    }

    
}