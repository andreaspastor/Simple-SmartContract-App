const data = '0x6060604052341561000f57600080fd5b6040516107cd3803806107cd83398101604052808051820191906020018051820191905050816003908051906020019061004a929190610069565b5080600290805190602001906100619291906100e9565b505050610186565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f106100aa57805160ff19168380011785556100d8565b828001600101855582156100d8579182015b828111156100d75782518255916020019190600101906100bc565b5b5090506100e5919061013c565b5090565b82805482825590600052602060002090810192821561012b579160200282015b8281111561012a578251829060001916905591602001919060010190610109565b5b5090506101389190610161565b5090565b61015e91905b8082111561015a576000816000905550600101610142565b5090565b90565b61018391905b8082111561017f576000816000905550600101610167565b5090565b90565b610638806101956000396000f300606060405260043610610083576000357c0100000000000000000000000000000000000000000000000000000000900463ffffffff16806309eef43e146100885780632847920e146100d95780632f265cf7146101675780637021939f146101a8578063bbadf363146101e9578063d723178a14610228578063f6fd7fde1461024f575b600080fd5b341561009357600080fd5b6100bf600480803573ffffffffffffffffffffffffffffffffffffffff1690602001909190505061028e565b604051808215151515815260200191505060405180910390f35b34156100e457600080fd5b6100ec6102ae565b6040518080602001828103825283818151815260200191508051906020019080838360005b8381101561012c578082015181840152602081019050610111565b50505050905090810190601f1680156101595780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b341561017257600080fd5b61018c60048080356000191690602001909190505061034c565b604051808260ff1660ff16815260200191505060405180910390f35b34156101b357600080fd5b6101cd600480803560001916906020019091905050610391565b604051808260ff1660ff16815260200191505060405180910390f35b34156101f457600080fd5b61020e6004808035600019169060200190919050506103b1565b604051808215151515815260200191505060405180910390f35b341561023357600080fd5b61024d600480803560001916906020019091905050610411565b005b341561025a57600080fd5b61027060048080359060200190919050506105e8565b60405180826000191660001916815260200191505060405180910390f35b60016020528060005260406000206000915054906101000a900460ff1681565b60038054600181600116156101000203166002900480601f0160208091040260200160405190810160405280929190818152602001828054600181600116156101000203166002900480156103445780601f1061031957610100808354040283529160200191610344565b820191906000526020600020905b81548152906001019060200180831161032757829003601f168201915b505050505081565b6000610357826103b1565b151561036257600080fd5b600080836000191660001916815260200190815260200160002060009054906101000a900460ff169050919050565b60006020528060005260406000206000915054906101000a900460ff1681565b600080600090505b6002805490508110156104065782600019166002828154811015156103da57fe5b9060005260206000209001546000191614156103f9576001915061040b565b80806001019150506103b9565b600091505b50919050565b61041a816103b1565b151561042557600080fd5b600160003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff1615151561047e57600080fd5b6001600080836000191660001916815260200190815260200160002060008282829054906101000a900460ff160192506101000a81548160ff021916908360ff16021790555060018060003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff0219169083151502179055507f6515a5d5b2ea3a43fde99d90140f3405745cb2a93b9932ffec25abbcd8bda1b8600382604051808060200183600019166000191681526020018281038252848181546001816001161561010002031660029004815260200191508054600181600116156101000203166002900480156105d65780601f106105ab576101008083540402835291602001916105d6565b820191906000526020600020905b8154815290600101906020018083116105b957829003601f168201915b5050935050505060405180910390a150565b6002818154811015156105f757fe5b906000526020600020900160009150905054815600a165627a7a72305820f191bd210427d0b2b98370203caa96122ad61931b3e684cfc6f81b392fbb88540029';

const abi =
	[
		{
			"constant": true,
			"inputs": [
				{
					"name": "",
					"type": "bytes32"
				}
			],
			"name": "votesReceived",
			"outputs": [
				{
					"name": "",
					"type": "uint8"
				}
			],
			"payable": false,
			"stateMutability": "view",
			"type": "function"
		},
		{
			"constant": true,
			"inputs": [
				{
					"name": "choice",
					"type": "bytes32"
				}
			],
			"name": "validChoice",
			"outputs": [
				{
					"name": "",
					"type": "bool"
				}
			],
			"payable": false,
			"stateMutability": "view",
			"type": "function"
		},
		{
			"constant": true,
			"inputs": [
				{
					"name": "candidate",
					"type": "bytes32"
				}
			],
			"name": "totalVotesFor",
			"outputs": [
				{
					"name": "",
					"type": "uint8"
				}
			],
			"payable": false,
			"stateMutability": "view",
			"type": "function"
		},
		{
			"constant": true,
			"inputs": [],
			"name": "questionName",
			"outputs": [
				{
					"name": "",
					"type": "string"
				}
			],
			"payable": false,
			"stateMutability": "view",
			"type": "function"
		},
		{
			"constant": true,
			"inputs": [
				{
					"name": "",
					"type": "address"
				}
			],
			"name": "hasVoted",
			"outputs": [
				{
					"name": "",
					"type": "bool"
				}
			],
			"payable": false,
			"stateMutability": "view",
			"type": "function"
		},
		{
			"constant": true,
			"inputs": [
				{
					"name": "",
					"type": "uint256"
				}
			],
			"name": "choices",
			"outputs": [
				{
					"name": "",
					"type": "bytes32"
				}
			],
			"payable": false,
			"stateMutability": "view",
			"type": "function"
		},
		{
			"anonymous": false,
			"inputs": [
				{
					"indexed": false,
					"name": "question",
					"type": "string"
				},
				{
					"indexed": false,
					"name": "choice",
					"type": "bytes32"
				}
			],
			"name": "VoteAdded",
			"type": "event"
		},
		{
			"constant": false,
			"inputs": [
				{
					"name": "choice",
					"type": "bytes32"
				}
			],
			"name": "voteForChoice",
			"outputs": [],
			"payable": false,
			"stateMutability": "nonpayable",
			"type": "function"
		},
		{
			"inputs": [
				{
					"name": "name",
					"type": "string"
				},
				{
					"name": "choicesNames",
					"type": "bytes32[]"
				}
			],
			"payable": false,
			"stateMutability": "nonpayable",
			"type": "constructor"
		}
	];