# Variables

Smart contracts in Solidity use variables to store information. You can think of variables as containers that hold information for use throughout your program.

#### Declaration of Variables:
 In Solidity, variables have a slightly different declaration. First, the data type must be specified, then the access modifier, finally variable name. 

**Syntax:** `<type> <visibility> <variable name> ; `

**type:** Data type such as `uint`, `int`, `bool` etc. We will see data types in the next section. For now, we will use the int data type to store integers in our examples. 

**visibility:** such as `public`, `private`,`internal`, `external`. We will see these in a later section. For now, we will use public visibility in our examples. 

**variable name:** what is the naming convetion of variable name

<a href="https://remix.ethereum.org/#optimize=false&runs=200&evmVersion=null&version=soljson-v0.8.15+commit.e14f2714.js" class="code-link"><i class="fas fa-link"></i></a>
#### Example:
```solidity
// SPDX-License-Identifier: GPL-3.0
pragma solidity 0.8.0;
contract MyContract {
  int public num = 5; 
}
```
#### types of Solidity variables:
