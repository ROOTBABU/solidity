import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-prerequisites',
  templateUrl: './prerequisites.component.html',
  styleUrls: ['./prerequisites.component.css']
})
export class PrerequisitesComponent implements OnInit {

  public config:any;
  public resourceConfig: any;
  constructor() { }

  ngOnInit(): void {
    this.config = [
      {
        id:"1",
        title:"Programming language",
        para:"You must have experience with any programming languages such as C++, Python, Java, or JavaScript."},
      {
        id:"2",
        title:"Blockchain fundamentals",
        para:`As a concept,
      blockchains are not too
      difficult for programmers to grasp. It is because most of
      the complications (mining,
      hashing, elliptic-curve cryptography, peer-to-peer networks,
      etc.) are intended to
      provide certain features and promises for the platform. Once
      you accept these
      features as given, you don't have to worry about the
      underlying technology - or do
      you need to know how Amazon's AWS works internally before
      you can use it?`},
      {
        id:"3",
        title:"Knowledge of the Ethereum platform",
        para:"What is Ethereum | Types of Nodes | DApps"
      },
      {
        id:"4",
        title:"The Ethereum Virtual Machine",
        para:"Accounts | Transactions | Gas | Gas Price | Gas Limit | Storage, Memory and the Stack | Instruction Set "
      },
      {
        id:"5",
        title:"Smart Contract",
        para:"traditional smart contract vs ethereum smart contracts | How Smart Contract Works? | Benifits | Problems and Challenges | Use Cases "
      },
      {
        id:"6",
        title:"MainNet | TestNet",
        para:`What is mainnet? | Why do we need mainnet? | Mainnet use cases | Mainnet Ethereum Virtual Machine (EVM) chains | What is a testnet? | Why is testnet important? | Testnet use cases | Testnet Ethereum Virtual Machine (EVM) chains | Mainnet vs. testnet `
      },
      {
        id:"7",
        title:"Remix IDE",
        para:" Solidity Compiler | Contract deplyment | Byte Code & ABI "
      },
      
    ];

    this.resourceConfig = [
      {
        id:"1"
      }
    ]
  }

}
