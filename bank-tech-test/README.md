# How to use bank.js

This program is written in Javascript.

Examples of input needed at step 4 and 5 below: <br />
Credit/debit = e.g. 500.50 or 500

1. Open node in the terminal
2. Type in `const BankAccount = require('./bankAccount.js');`
3. Type in `const bankAccount = new BankAccount();`
4. To deposit money, run `bankAccount.addDeposit(credit);`
5. To withdrawel money, run `bankAccount.addWithdrawal(debit);`
6. To print the account statement, run `console.log(bankAccount.printStatement());`

## Assumptions

- Credit/debit can take an integer or a float
- Credit/debit prints two decimals
- The function printStatement() prints the transactions as entered in reverse

## Dependencies

Run the following commands before running bank.js using `node`:

```
nvm use node
```

Run the following commans before running tests using `jest`:

```
npm init -y
npm add jest
npm install -g jest
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
> bankAccount.addDeposit(1000);
undefined
> bankAccount.makeWithdrawal(500.50);
undefined
> console.log(bankAccount.printStatement());
date || credit || debit || balance
23/09/2022 ||  || 500.50 || 499.50
23/09/2022 || 1000.00 ||  || 1000.00
undefined
```

## Code structure

The code structure of bankAccount.js, statement.js and transaction.js is as shown below. The transaction class uses the functions `deposit(credit)` and `withdrawal(debit)` to store the date, credit, debit and balance in an object. In the statement class, the function `printStatement()` maps over all transactions to print the header and body in the desired format, using the function `toFormattedString(transaction)`. The functions `formatDate(date)` and `formatCurrency(value)` are both called within the `toFormattedString(transaction)` to ensure DRY code. Both the transaction and statement class come together in the bank class, where the user can add a deposit, make a withdrawal and print a formatted account statement.

#### bank.js

```javascript
class BankAccount {
  addDeposit(credit) {
    // adds a deposit to an array of transactions
  }

  addWithdrawal(debit) {
    // adds a withdrawal to an array of transactions
  }

  printStatement() {
    // returns the account statement
  }
}
```

#### account.js

```javascript
class Statement {
  getStatement(transactions) {
    // returns all formatted transactions
  }

  toFormattedString(transaction) {
    // returns a formatted transaction
  }

  formatDate(date) {
    // returns a formatted date
  }

  formatCurrency(value) {
    // returns a formatted credit/debit/balance
  }
}
```
#### transaction.js

```javascript
class Transaction {
  deposit(credit) {
    // returns the data of a deposit
  }

  withdrawal(debit) {
    // returns the data of a withdrawal
  }
}
```
