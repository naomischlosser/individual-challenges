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
    console.log(accountStatement)
    return accountStatement;
  };

  toFormattedString(transaction) {
    console.log(transaction)   
    if (typeof transaction.credit === 'number') transaction.credit = transaction.credit.toFixed(2);
    if (typeof transaction.debit === 'number') transaction.debit = transaction.debit.toFixed(2);
    if (typeof transaction.balance === 'number') transaction.balance = transaction.balance.toFixed(2);

    return Object.values(transaction).join(" || ")
  }
}

module.exports = BankAccount;