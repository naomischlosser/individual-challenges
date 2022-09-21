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
      date: this.formatDate(new Date()),
      credit: credit * 100,
      debit: null,
      balance: this.balance * 100,
    };

    return depositData;
  }

  withdrawal(debit) {
    if (typeof debit !== "number" || isNaN(debit)) {
      throw "Debit is not a number!";
    }

    this.balance -= debit;

    let withdrawalData = {
      date: this.formatDate(new Date()),
      credit: null,
      debit: debit * 100,
      balance: this.balance * 100,
    };

    return withdrawalData;
  }

  formatDate(date) {
    return  ('0' + date.getDate()).slice(-2) + '/' +
            ('0' + date.getMonth() + 1).slice(-2) + '/' +
            date.getFullYear();
  }
}

module.exports = Transaction;