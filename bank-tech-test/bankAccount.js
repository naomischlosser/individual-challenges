class BankAccount {
  constructor() {
    this.balance = 0;
    this.transactions = [];
  };

  getTransactions() {
    return this.transactions;
  }

  deposit(credit, date) {
    this.balance += credit;

    let depositData = {
      date: date,
      credit: credit,
      debit: null,
      balance: this.balance,
    };

    this.transactions.push(depositData)
  };

  withdrawal(debit, date) {
    this.balance -= debit;

    let withdrawalData = {
      date: date,
      credit: null,
      debit: debit,
      balance: this.balance,
    };

    this.transactions.push(withdrawalData)
  };

  printStatement() {
    const header = Object.keys(this.transactions[0]).join(" || ");
    const body = this.transactions.map(this.toFormattedString);
    
    const accountStatement = header + '\n' + body.reverse().join('\n');
    return accountStatement;
  };

  toFormattedString(transfer) {    
    if (Number.isInteger(transfer.credit)) transfer.credit = transfer.credit.toFixed(2);
    if (Number.isInteger(transfer.debit)) transfer.debit = transfer.debit.toFixed(2);

    transfer.balance = transfer.balance.toFixed(2);

    return Object.values(transfer).join(" || ")
  }
}

module.exports = BankAccount;