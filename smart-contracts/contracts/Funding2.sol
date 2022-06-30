// SPDX-License-Identifier: MIT
pragma solidity ^0.8.9;

import "@openzeppelin/contracts/access/Ownable.sol";

interface IERC20 {
    function balanceOf(address account) external view returns (uint256);

    function transfer(address to, uint256 amount) external returns (bool);

    function transferFrom(
        address from,
        address to,
        uint256 amount
    ) external returns (bool);
}

contract Exposure is Ownable {
    event ProjectCreated(
        bytes32 indexed _name,
        string indexed _uri,
        address owner
    );

    event Voted(
        address indexed voter,
        bytes32 indexed project,
        uint256 upVotes
    );

    event Funded(address indexed funder, uint256 amount);

    struct Project {
        bytes32 name;
        uint256 voteCount;
        string uri;
        address projectAddress; // also the project's owner address
    }

    Project[] public projects;

    uint256 public pool;
    mapping(address => uint256) public poolShare;
    mapping(bytes32 => uint256) public pojectNameToIndex;
    mapping(bytes32 => mapping(address => bool)) public projectNameToVoter;
    mapping(address => uint256) public participantToNumberofProjects;

    uint256 public totalParticipants = 0;

    constructor() {}

    function fund() external payable {
        pool += msg.value;
        emit Funded(msg.sender, msg.value);
    }

    function fundWithERC20(address fundToken, uint256 amount) external payable {
        require(
            IERC20(fundToken).balanceOf(msg.sender) >= amount,
            "Has not enough money"
        );
        IERC20(fundToken).transferFrom(msg.sender, address(this), amount);
        poolShare[fundToken] += amount;
        emit Funded(msg.sender, amount);
    }

    function createProject(bytes32 _name, string memory _uri) external {
        projects.push(
            Project({
                name: _name,
                voteCount: 0,
                uri: _uri,
                projectAddress: msg.sender
            })
        );
        pojectNameToIndex[_name] = projects.length - 1;
        if (!(participantToNumberofProjects[msg.sender] > 0))
            totalParticipants += 1;
        participantToNumberofProjects[msg.sender] += 1;
        emit ProjectCreated(_name, _uri, msg.sender);
    }

    function vote(bytes32 project_name) external {
        require(!hasVotedProject(project_name), "already voted this project");
        projects[pojectNameToIndex[project_name]].voteCount += 1;
        projectNameToVoter[project_name][msg.sender] = true;
        emit Voted(
            msg.sender,
            project_name,
            projects[pojectNameToIndex[project_name]].voteCount
        );
    }

    function hasVotedProject(bytes32 project_name) public view returns (bool) {
        if (projectNameToVoter[project_name][msg.sender]) return true;
        return false;
    }

    function getAllProjects() public view returns (Project[] memory) {
        Project[] memory allProjects = new Project[](projects.length);
        for (uint256 i = 0; i < projects.length; i++) {
            allProjects[i] = projects[i];
        }
        return allProjects;
    }
}
