# How to use bank.js

This program is written in Javascript.

Examples of input needed at step 4 and 5 below: <br />
Credit/debit = e.g. 500.50 or 500

1. Open node in the terminal
2. Type in `const Bank = require('./bank.js');`
3. Type in `const bank = new Bank();`
4. To deposit money, run `bank.accountDeposit(credit);`
5. To withdrawel money, run `bank.accountWithdrawal(debit);`
6. To print the account statement, run `console.log(bank.accountStatement());`

## Assumptions

- Credit/debit can take an integer or a float
- Credit/debit prints a GBP currency with two decimals
- The function accountStatement() prints the transactions as entered in reverse

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

## Example in node

```
$ node
Welcome to Node.js v18.7.0.
Type ".help" for more information.
> const Bank = require('./bank.js');
undefined
> const bank = new Bank();
undefined
> bank.accountDeposit(1000);
undefined
> bank.accountWithdrawal(500.50);
undefined
> console.log(bank.accountStatement());
date || credit || debit || balance
21/81/2022 ||  || £500.50 || £499.50
21/81/2022 || £1,000.00 ||  || £1,000.00
undefined
```

## Code structure

The code structure of bank.js, account.js and transaction.js is as shown below. The transaction class uses the functions `deposit(credit)` and `withdrawal(debit)` to store the date, credit, debit and balance in an object. In the account class, the function `addTransaction(transaction)` adds each transaction to an array. The function `printStatement()` maps over these transactions to print the header and body in the desired format, using the function `toFormattedString(transaction)`. The functions `formatDate(date)` and `formatCurrency(value)` are both called within the `toFormattedString(transaction)` to ensure DRY code. Both the transaction and account class come together in the bank class to ensure the user only has to load one file into node and can only access the required functions (deposit, withdrawal and account statement).

#### bank.js

```javascript
class Bank {
  accountDeposit(credit) {
    // adds a deposit
  }

  accountWithdrawal(debit) {
    // adds a withdrawal
  }

  accountStatement() {
    // returns the account statement
  }
}
```

#### account.js

```javascript
class Account {
  addTransaction(transaction) {
    // puhes a transaction into an array
  }

  printStatement() {
    // returns the formatted account statement
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
