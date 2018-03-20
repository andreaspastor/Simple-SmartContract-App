'use-strict';

/*
  This application only handle 3 choices because ..., just add
  loops if you want to iterate through multiple choices, the contract
  can handle as much as you need
  Also, browser need to support ES6 or install Babel otherwise
*/

if (typeof web3 !== 'undefined') {
    web3 = new Web3(web3.currentProvider);
} else {
    // set the provider you want from Web3.providers
    web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));
}

web3.eth.defaultAccount = web3.eth.accounts[0];

var VotingContract = web3.eth.contract(abi);
var votingInstance = undefined;
var voteEvent = undefined;
var activeAccount = web3.eth.accounts[0];

const disableForm = () => {
  $('#create-vote').prop('disabled', true);
  $('#question').prop('disabled', true);
  $('#option1').prop('disabled', true);
  $('#option2').prop('disabled', true);
  $('#option3').prop('disabled', true);
  $('#contract-address').prop('disabled', true);
  $('#load-contract').prop('disabled', true);
}

const createTable = (question, choices, values) => {
  disableForm();
  watchEvents();
  choices.forEach((choice, i) =>
    $('#vote-table tbody').append(
      `<tr class='child'>
        <td>` + choice + `</td>
        <td id='`+ choice + `'>` + values[i] +`</td>
        <td> <button id='vote-for-` + i +`'>Voter pour ce choix</button> </td>
      </tr>`
    ));
    $('#table-title').text(question);
}

const watchEvents = () => {
  voteEvent = votingInstance.VoteAdded();

  voteEvent.watch((error, result) => {
     if (!error){
        var choice = web3.toUtf8(result.args.choice);
        alert(
          "L'utilisateur du compte: " + result.args.account
          + "\n a voté pour le choix: " + choice
          + "\n à la question : " + result.args.question
        );
        var prev = Number($('#' + choice).html());
        $('#' + choice).html((prev+1).toString());
     }
  });
}

$(document).ready(() => {

    // Create a new contract instance with specified parameters
    $("#create-vote").click(() => {
        var question = $("#question").val();
        var opt1 = $("#option1").val();
        var opt2 = $("#option2").val();
        var opt3 = $("#option3").val();

        if (!question.trim() || !opt1.trim() || !opt2.trim() || !opt3.trim()) {
          alert('Invalid input');
        }
        else {
            votingInstance = VotingContract.new(
               question,
               [opt1, opt2, opt3],
               {
                 from: activeAccount,
                 data,
                 gas: '4700000'
               }, (e, contract) => {
                if (typeof contract.address !== 'undefined') {
                     alert("Contrat miné à l'adresse: " + contract.address + '\n'
                     + 'Hash de la transaction: ' + contract.transactionHash);

                     createTable(question, [opt1, opt2, opt3], [0,0,0]);
                }
             });
        }
    });

    // Load an existing contract instance with the address
    $("#load-contract").click(() => {
      votingInstance = VotingContract.at($("#contract-address").val());

      var question = votingInstance.questionName();

      var ch1 = web3.toUtf8(votingInstance.choices(0));
      var ch2 = web3.toUtf8(votingInstance.choices(1));
      var ch3 = web3.toUtf8(votingInstance.choices(2));

      var nbVotes1 = votingInstance.totalVotesFor(ch1);
      var nbVotes2 = votingInstance.totalVotesFor(ch2);
      var nbVotes3 = votingInstance.totalVotesFor(ch3);

      createTable(question, [ch1, ch2, ch3], [nbVotes1, nbVotes2, nbVotes3]);
    });

    // Vote for a choice, call contract function to vote
    $('#vote-table').on('click', 'button[id^=vote-for]', (event) => {
        var index = Number(event.target.id.slice(-1));
        votingInstance.voteForChoice(web3.toUtf8(votingInstance.choices(index)));
    });

    $('select').on('change', function() {
      activeAccount = web3.eth.accounts[this.value];
      web3.eth.defaultAccount = activeAccount;
    });

});
