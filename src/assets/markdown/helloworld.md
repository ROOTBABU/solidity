# Introduction

### What is Solidity?

Solidity is statically typed, contract-oriented, high-level language used to develop smart contracts that run on `Ethereum Blockchain`. Contracts store logic that runs on the Ethereum Virtual Machine (EVM) and can modify blockchain accounts. Solidity is similar in appearance to other coding languages such as `C++`, `Python`, and `JavaScript`.

A statically-typed language is a language (such as `Java`, `C`, or `C++`) where variable types are known at compile time.

### Remix IDE

For all of our coding, we will use <a href="https://remix.ethereum.org" target="_blank">Remix</a>, an online text editor.

Remix is a web browser based IDE that allows you to write, deploy and administer Solidity smart contracts, without the need to install Solidity locally.

##### Create new file in Remix IDE:

You can create a new file by clicking the button under the `default_workspace` heading on the left. Click it and name our new file `HelloWorld.sol`. Click on the newly created `HelloWorld.sol` file to open the editor.

 <img alt="HelloWorld example in remix IDE"  src="../../../assets/images/HelloWorld.JPG" >
 <b><center class="img-label">Created a new file HelloWorld.sol</center></b>

 ### Write Hello World in Solidity

 As we know Solidity is similar to languages like `JavaScript`, `Python`, and `Java`. Let's write `Hello World!` in each of these languages to see how they compare to Solidity!

 ##### Javascript:

 We can print the `Hello World!` string using `console.log()` method to the console.

 ```js
 console.log("Hello World!");
// Hello World!
```

##### Python:

Using the built-in `print()` function in Python, we can printing the string Hello world!

```py
print("Hello World!);
// output: Hello World!
```

##### Java:

Every Java application begins with a class definition and the main method. We can print the text `Hello World!` using the built-in `println()` method.

```java
class HelloWorld {
    public static void main(String[] args) {
        System.out.println("Hello, World!"); 
   }
}
```

##### Solidity:

Solidity smart contract files begin with a `license`, a `compiler` version, and then the `contract`. The `Hello World!` string is printed in above languages using some method, but in Solidity, we can create a public variable that contains the string.

```sol
// SPDX-License-Identifier: GPL-3.0
pragma solidity ^0.8.10;
contract helloWorld {
  string public hello = "Hello World!";
}
```

#### Step-by-step code explanation:

#####  1. SPDX License Identifier: 
The every `first line` in our smart contract is the following:

<pre style="background: rgba(0,0,0,.05); padding:20px">
// SPDX-License-Identifier: GPL-3.0
</pre>

The first line tells you that the source code is licensed under the `GPL version 3.0`. Every smart contract begins with the `SPDX License Identifier`. `SPDX` stands for `Software Package Data Exchange.`

It is best practice to include a type of license that the code you are writing can be used under. The license should be from one of the following:<a href=" https://spdx.org/licenses/" target="_blank"> https://spdx.org/licenses/</a>.

If you do not want to specify a license or if the source code is not open-source, please use the special value `UNLICENSED`.

If the license identifier isn't included in the contract file the compiler will show a `warning`.

 <img src="../../../assets/images/SPDX-Warning.JPG" >
 <b><center class="img-label">SPDX-Warning</center></b>

If there are multiple SPDX-License-Identifier line in the contract file the compiler will show an `ParseError.`

 <img src="../../../assets/images/ParseError.JPG" >
 <b><center class="img-label">ParseError: Multiple SPDX-License-Identifier</center></b>

##### 2. Pragmas:
The next line in our contract is:

<pre style="background: rgba(0,0,0,.05); padding:20px">
pragma solidity ^0.8.10;
</pre>

`pragma` is a directive that specifies the compiler version to be used for current Solidity file.

Each Solidity contract must contain a `pragma` directive, because it will always be local to the file in which it is written.

If the `pragma` isn't included in the contract file the compiler will show a warning.

 <img src="../../../assets/images/Pragama-warning.JPG" >
 <b><center class="img-label">Warning: required of compiler version</center></b>

##### 3. Contract:

The next line is:

<pre style="background: rgba(0,0,0,.05); padding:20px">
contract HelloWorld {
</pre>

A `contract` in the sense of Solidity is a collection of `code` (its functions) and `data` (its state) that resides at a specific address on the `Ethereum blockchain.`

Inside of our contract declaration, the first line is:

<pre style="background: rgba(0,0,0,.05); padding:20px">
string public hello = "Hello World!";
</pre>

This line declares a state variable called `hello` of type string . You can think of it as a single slot in a `database` that you can query and alter by calling functions of the code that manages the database.

### How to compile and deploy the code:

<b>Step 1:</b> Click the Compile button under the Compiler window after you have written the Smart contract in the code section.

 <img src="../../../assets/images/compiler.JPG" >
 <b><center class="img-label">Compilation of contract</center></b>

<b>Step 2:</b> Under `Deploy and Run Transactions` window, click on Deploy to execute the code. You will find the `deployed contracts` dropdown menu at the bottom of the section after deployment.

 <img src="../../../assets/images/deploy.JPG" >
 <b><center class="img-label">Deployment of contract</center></b>

 <b>Step 3 :</b> You can run the program by clicking the variable `hello` button under the drop-down of `deployed contracts.` By clicking the drop-down on the console, you can also view the output in logs.

  <img src="../../../assets/images/output.JPG" >
  <b><center class="img-label">Output of contract</center></b>