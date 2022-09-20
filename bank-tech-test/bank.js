class Bank {
  constructor() {
    this.balance = 0;
    this.transfers = [];
  };

  deposit(credit, date) {
    this.balance += credit;

    let depositData = {
      date: date,
      credit: credit,
      debit: 0,
      balance: this.balance,
    };

    this.transfers.push(depositData)

    return this.transfers;
  };

  withdrawal(debit, date) {
    this.balance -= debit;

    let withdrawalData = {
      date: date,
      credit: 0,
      debit: debit,
      balance: this.balance,
    };

    this.transfers.push(withdrawalData)

    return this.transfers;
  };
}

module.exports = Bank;