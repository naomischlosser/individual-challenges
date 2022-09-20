# How to use bankAccount.js
This program is written in Javascript.

Examples of input needed at step 4 and 5 below: <br />
Credit/debit = 500.00 <br />
Date = '14/01/2023'

*Note that the date needs to be within quotation marks*

1. Open node in the terminal
2. Type in `const BankAccount = require('./bankAccount.js');`
3. Type in `const bankAccount = new BankAccount();`
4. To deposit money, run `bankAccount.deposit(credit, date);`
5. To withdrawel money, run `bankAccount.withdrawal(debit, date);`
6. To print the account statement, run `console.log(bankAccount.printStatement());`

## Classes and functions
```javascript
class Bank {
  getTransactions() {
    //returns all transactions;
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

## Dependencies
Run the following commands before using this program:
```
nvm use node
```

Run the following commans before running tests:
```
npm init -y
npm add jest
npm install -g jest
```