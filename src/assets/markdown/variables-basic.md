# Variables

<p>Smart contracts in Solidity use variables to store information. You can think of variables as containers that hold information for use throughout your program.</p>
<br>

#### Declaration of Variables:

<p>In Solidity, variables have a slightly different declaration. First, the data type must be specified, then the access modifier, finally variable name. </p>

**Syntax:** `<type> <visibility> <variable name> ; `

**type:** Data type such as `uint`, `int`, `bool` etc. We will see data types in the next section. For now, we will use the int data type to store integers in our examples. 

**visibility:** such as `public`, `private`,`internal`, `external`. We will see these in a later section. For now in our examples, we will use public visibility that is accessible to all meidum. 

**variable name:** what is the naming convetion of variable name

<a href="https://remix.ethereum.org/#optimize=false&runs=200&evmVersion=null&version=soljson-v0.8.15+commit.e14f2714.js" class="code-link"><i class="fas fa-link"></i></a>

<br>

#### Example:
```solidity
// SPDX-License-Identifier: GPL-3.0
pragma solidity 0.8.0;
contract MyContract {
  int public num = 5; 
}
```
<br>

#### Types of Solidity variables:

There are three types of Solidity variables:

State Variables
Local Variables
Global Variables


## State Variables

<p>State variables are variables whose values are permanently stored in contract storage.</p>
<p>In other words imagine you are using another programming language, such as Java, C#, Python, etc. And you want to store user information for a long time. How would you do it? Connect your application to a database server and then save the data there. With Solidity, you do not need a connection, you can simply use state variables to store your data permanently. </p>
<p> Each function has its own scope, and state variables should always be defined outside of that scope. </p>
<p>whatever you are using in state variable that will store in EVM.</p>

```solidity
// SPDX-License-Identifier: GPL-3.0

pragma solidity 0.8.0;

contract SimpleStorage {
    int public storedData; // State variable
    //the word state specifies that variables indicate the state of smart contracts. 
}
```

<hr>

## Local Variables

<p>This variable's value is present until the function executes, and it cannot be accessed outside of the function. This type of variable is usually used to store temporary values and not stored on the blockchain in contract storage. </p>

```sol
// SPDX-License-Identifier: GPL-3.0

pragma solidity 0.8.0;

contract SampleContract {
   function getResult() public pure returns(int){

      //local variable
      int a = 7;
      //local variable 
      int b = 3;
      int result = a + b;
      //access the local variable
      return result; 
   }
}
```
<hr>

## Global Variables

<p>There are some special variables that are used globally and provide information about the transactions and properties of the blockchain.</p>

<p> such as </p>
<ul>
<li>
    block.difficulty : Current block difficulty</li>
  <li>  block.timestamp : Current block timestamp</li>
   <li> block.number : Current block number</li>
</li>
<ul>

<p> We will discuss this in more detail in a separate section with examples. </p>