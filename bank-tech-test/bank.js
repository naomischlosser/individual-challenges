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
      debit: 0,
      balance: this.balance,
    };

    this.transfers.push(depositData)
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
  };

  printAccountStatement() {
    const header = 'date || credit || debit || balance' + '\n';
    const body = this.transfers.map(this.toFormattedString);

    // console.log(this.transfers);

    const accountStatement = header + body;
    // console.log(accountStatement);
    return accountStatement;
  };

  toFormattedString(transfer) {
      let date = transfer.date;
      let credit = transfer.credit.toFixed(2);
      let debit = transfer.debit.toFixed(2);
      let balance = transfer.balance.toFixed(2);

      if (credit === '0.00') {
        credit = '';
      } else if (debit === '0.00') {
        debit = '';
      }
      return `${date} || ${credit} || ${debit} || ${balance}`;
  }
}

module.exports = Bank;