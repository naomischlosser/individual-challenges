# How to use this program
This program is written in Javascript.

Value = e.g. 500.50
Date = e.g. 14/01/2023

1. Open node in the terminal and type in `const bank = require('./bank.js');`
2. To deposit money, run `bank.deposit(value, date)`
3. To withdrawel money, run `bank.withdrawel(value, date)`
4. To print the account statement, run `bank.printAccountStatement()`

## Classes and functions
```javascript
class Bank {
  deposit(value, date) {
    // makes a deposit
  }

  withdrawal(value, date) {
    // makers a withdrawal
  }

  printAccountStatement() {
    // prints the account statement
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