class Bank {
  constructor() {
    this.balance = 0;
    this.transferData = {};
    this.allTransferData = [];
  };

  deposit(credit, date) {
    this.balance += credit;
    this.transferData.date = date;
    this.transferData.credit = credit;
    this.transferData.debit = 0;
    this.transferData.balance = this.balance;

    return this.transferData;
  };

  withdrawal(debit, date) {
    this.balance -= debit;
    this.transferData.date = date;
    this.transferData.credit = 0;
    this.transferData.debit = debit;
    this.transferData.balance = this.balance;

    return this.transferData;
  };
}

module.exports = Bank;