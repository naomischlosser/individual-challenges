class Bank {
  constructor() {
    this.balance = 0;
    this.transfers = [];
  };

  getTransfers() {
    return this.transfers;
  }

  deposit(credit, date) {
    this.balance += credit;

    let depositData = {
      date: date,
      credit: credit,
      debit: null,
      balance: this.balance,
    };

    this.transfers.push(depositData)
  };

  withdrawal(debit, date) {
    this.balance -= debit;

    let withdrawalData = {
      date: date,
      credit: null,
      debit: debit,
      balance: this.balance,
    };

    this.transfers.push(withdrawalData)
  };

  printAccountStatement() {
    const header = Object.keys(this.transfers[0]).join(" || ") + '\n';
    const body = this.transfers.map(this.toFormattedString);
    const accountStatement = header + body;

    return accountStatement;
  };

  toFormattedString(transfer) {
    if (!isNaN(transfer.credit)) {
      transfer.credit = transfer.credit.toFixed(2);
    } else if (!isNaN(transfer.debit)) {
      transfer.credit = transfer.debit.toFixed(2);
    }

    transfer.balance = transfer.balance.toFixed(2);

    return Object.values(transfer).join(" || ")
  }
}

module.exports = Bank;