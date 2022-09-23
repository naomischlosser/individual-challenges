class Transaction {
  constructor() {
    this.balance = 0;
  }

  deposit(credit) {
    if (typeof credit !== "number" || isNaN(credit)) {
      throw "Credit is not a number!";
    }

    this.balance += credit;

    let depositData = {
      date: new Date(),
      credit: credit,
      debit: null,
      balance: this.balance,
    };

    return depositData;
  }

  withdrawal(debit) {
    if (typeof debit !== "number" || isNaN(debit)) {
      throw "Debit is not a number!";
    }

    this.balance -= debit;

    let withdrawalData = {
      date: new Date(),
      credit: null,
      debit: debit,
      balance: this.balance,
    };

    return withdrawalData;
  }
}

module.exports = Transaction;
