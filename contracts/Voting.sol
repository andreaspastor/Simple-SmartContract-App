pragma solidity ^0.4.18;

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

    function getNbVoteId() external view returns(uint) {
        return votes.length;
    }

    function getVote(uint _voteId) external view returns(string, uint, uint) {
        require(votes.length > _voteId);
        return (votes[_voteId].question,
                votes[_voteId].countYes,
                votes[_voteId].countNo);
    }

    function getVoteOwner(uint _voteId) external view returns(address) {
        return voteToOwner[_voteId];
    }
    
    function voteFor(uint _voteId) external {
        votes[_voteId].countYes++;
    }
    
    function voteAgainst(uint _voteId) external {
        votes[_voteId].countNo++;
    }

}