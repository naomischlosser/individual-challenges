const Account = require("./Account");
const Transaction = require("./transaction");

class Bank {
  constructor() {
    this.account = new Account();
    this.transaction = new Transaction();
  }

  accountDeposit(credit) {
    this.account.addTransaction(this.transaction.deposit(credit));
  }

  accountWithdrawal(debit) {
    this.account.addTransaction(this.transaction.withdrawal(debit));
  }

  accountStatement(){
    return this.account.printStatement();
  }
}

module.exports = Bank;