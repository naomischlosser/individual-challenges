# How to use this program
This program is written in Javascript.

Examples of input needed at step 4 and 5 below: <br />
Value = 500.50 <br />
Date = '14/01/2023'

1. Open node in the terminal
2. Type in `const Bank = require('./bank.js');`
3. Type in `const bank = new Bank();`
4. To deposit money, run `bank.deposit(value, date);`
5. To withdrawel money, run `bank.withdrawel(value, date);`
6. To print the account statement, run `bank.printAccountStatement();`

## Classes and functions
```javascript
class Bank {
  deposit(value, date) {
    // makes a deposit
  }

  withdrawal(value, date) {
    // makes a withdrawal
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