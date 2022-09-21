# How to use bankAccount.js

This program is written in Javascript.

Examples of input needed at step 4 and 5 below: <br />
Credit/debit = 500.00 <br />
Date = '14/01/2023'

_Note that the date needs to be within quotation marks_

1. Open node in the terminal
2. Type in `const BankAccount = require('./bankAccount.js');`
3. Type in `const bankAccount = new BankAccount();`
4. To deposit money, run `bankAccount.deposit(credit, date);`
5. To withdrawel money, run `bankAccount.withdrawal(debit, date);`
6. To print the account statement when finished, run `console.log(bankAccount.printStatement());`

## Assumptions

- Credit/debit can take an integer or a float
- Credit/debit only prints two decimals
- The date only takes strings in a DD/MM/YYYY or DD-MM-YYYY format
- The function printStatement() prints the transactions as entered in reverse

## Dependencies

Run the following commands before running bankAccount.js using `node`:

```
nvm use node
```

Run the following commans before running tests using `jest`:

```
npm init -y
npm add jest
npm install -g jest
```

## Classes and functions

```javascript
class Bank {
  getTransactions() {
    // returns all transactions;
  }

  deposit(credit, date) {
    // adds a deposit
  }

  withdrawal(debit, date) {
    // adds a withdrawal
  }

  printStatement() {
    // prints the account statement
  }

  toFormattedString(transaction) {
    // formats a transaction
  }
}
```

## Example in node

```
$ node
Welcome to Node.js v18.7.0.
Type ".help" for more information.
> const BankAccount = require('./bankAccount.js');
undefined
> const bankAccount = new BankAccount();
undefined
> bankAccount.deposit(500, '23/08/2022');
undefined
> bankAccount.withdrawal(200, '25/08/2022');
undefined
> console.log(bankAccount.printStatement());
date || credit || debit || balance
25/08/2022 ||  || 200.00 || 300.00
23/08/2022 || 500.00 ||  || 500.00
undefined
```
