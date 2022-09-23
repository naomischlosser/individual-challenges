const Statement = require("./statement");
const Transaction = require("./transaction");

class Bank {
  constructor() {
    this.transactions = [];
    this.Statement = new Statement();
    this.transaction = new Transaction();
  }

  addDeposit(credit) {
    this.transactions.push(this.transaction.withdrawal(credit));
  }

  addWithdrawal(debit) {
    this.transactions.push(this.transaction.withdrawal(debit));
  }

  printStatement() {
    return this.Statement.getStatement();
  }
}

module.exports = Bank;
