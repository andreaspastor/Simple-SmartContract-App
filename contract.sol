pragma solidity ^0.4.18;

contract Voting {

  event VoteAdded(string question, bytes32 choice, address account);

  mapping (bytes32 => uint8) public votesReceived;
  mapping (address => bool) public hasVoted;

  bytes32[] public choices;

  string public questionName;


  function Voting(string name, bytes32[] choicesNames) public {
    questionName = name;
    choices = choicesNames;
  }

  function totalVotesFor(bytes32 candidate) view public returns (uint8) {
    require(validChoice(candidate));
    return votesReceived[candidate];
  }

  function voteForChoice(bytes32 choice) public {
    require(validChoice(choice));
    votesReceived[choice] += 1;
    hasVoted[msg.sender] = true;
    VoteAdded(questionName, choice, msg.sender);
  }

  function validChoice(bytes32 choice) view public returns (bool) {
    for(uint i = 0; i < choices.length; i++) {
      if (choices[i] == choice) {
        return true;
      }
    }
    return false;
  }
}
