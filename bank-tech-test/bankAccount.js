const Statement = require("./statement");
const Transaction = require("./transaction");

class BankAccount {
  constructor() {
    this.transactions = [];
    this.statement = new Statement();
    this.transaction = new Transaction();
  }

  addDeposit(credit) {
    this.transactions.push(this.transaction.deposit(credit));
  }

  addWithdrawal(debit) {
    this.transactions.push(this.transaction.withdrawal(debit));
  }

  printStatement() {
    return this.statement.getStatement(this.transactions);
  }
}

module.exports = BankAccount;
