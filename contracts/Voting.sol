pragma solidity ^0.4.17;

contract Voting {

    event VoteAdded(uint voteId, string question);

    struct Vote {
        string question;
        uint countYes;
        uint countNo;
    }
    
    Vote[] public votes;

    mapping (uint => address) public voteToOwner;
    mapping (address => uint) ownerVoteCount;

    function createVote(string _question) external {
        uint voteId = votes.push(Vote(_question, 0, 0)) - 1;

        voteToOwner[voteId] = msg.sender;
        ownerVoteCount[msg.sender]++;
        VoteAdded(voteId, _question);
    }

}