class Transaction {
  constructor() {
    this.balance = 0;
  }

  deposit(credit) {
    this.balance += credit;

    let depositData = {
      date: new Date(),
      credit: credit * 100,
      debit: null,
      balance: this.balance * 100,
    };

    return depositData;
  }

  withdrawal(debit) {
    this.balance -= debit;

    let withdrawalData = {
      date: new Date(),
      credit: null,
      debit: debit * 100,
      balance: this.balance * 100,
    };

    return withdrawalData;
  }
}

module.exports = Transaction;