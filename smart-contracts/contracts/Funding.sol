// SPDX-License-Identifier: GPL-3.0
pragma solidity >=0.7.0 <0.9.0;

interface IERC721Votes {
    function getPastVotes(address, uint256) external view returns (uint256);
}

interface IERC20 {

    function balanceOf(address account) external view returns (uint256);

    function transfer(address to, uint256 amount) external returns (bool);

    function transferFrom(
        address from,
        address to,
        uint256 amount
    ) external returns (bool);
}

contract Funding {
    event Voted(
        address indexed voter,
        uint256 indexed project,
        uint256 weight,
        uint256 proposalVotes
    );

    event Funded(
        address indexed funder,
        uint256 amount    
    );

    struct Project {
        bytes32 name;
        uint256 voteCount;
        address projectAddress;
    }

    mapping(address => uint256) public spentVotePower;

    Project[] public projects;
    IERC721Votes public voteToken;
    uint256 public referenceBlock;
    uint256 public endBlock;
    uint256 capital;
    mapping(address => uint256) public capitals;


    constructor(
        bytes32[] memory projectNames,
        address[] memory projectAddress,
        address _voteToken,
        uint256 duration
    ) {
        for (uint256 i = 0; i < projectNames.length; i++) {
            projects.push(Project({name: projectNames[i], voteCount: 0, projectAddress: projectAddress[i]}));
        }
        voteToken = IERC721Votes(_voteToken);
        referenceBlock = block.number;
        endBlock = block.number + duration;
    }

    function fund(uint256 amount) external payable { 
        require(msg.value >= amount, "Has not enough money");
        capital += msg.value;
        emit Funded(msg.sender, amount);
    }

    function fundERC20(address fundToken, uint256 amount) external payable { 
        require( IERC20(fundToken).balanceOf(msg.sender) >= amount, "Has not enough money");
        IERC20(fundToken).transferFrom(msg.sender, address(this), amount);
        capitals[fundToken] += amount;
        emit Funded(msg.sender, amount);
    }

    function withdrawWinner(address tokenAddress) external { 
        require(block.number >= endBlock, "funding is still in progress" );
        IERC20(tokenAddress).transfer(projects[winningProposal()].projectAddress, capitals[tokenAddress]);
        capitals[tokenAddress] = 0;
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