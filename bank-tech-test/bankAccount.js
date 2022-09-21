class BankAccount {
  constructor() {
    this.balance = 0;
    this.transactions = [];
  }

  // Seperate function mainly for testing purposes
  getTransactions() {
    return this.transactions;
  }

  deposit(credit, date) {
    if (typeof date !== 'string') {
      throw 'Date is not a string!';
    }

    this.balance += credit;

    let depositData = {
      date: date.replace(/-/g, "/"),
      credit: credit,
      debit: null,
      balance: this.balance,
    };    

    this.transactions.push(depositData);
  }

  withdrawal(debit, date) {
    if (typeof date !== 'string') {
      throw 'Date is not a string!';
    }

    this.balance -= debit;

    let withdrawalData = {
      date: date.replace(/-/g, "/"),
      credit: null,
      debit: debit,
      balance: this.balance,
    };

    this.transactions.push(withdrawalData);
  }

  printStatement() {
    const header = 'date || credit || debit || balance' + '\n';
    const body = this.getTransactions().map(this.toFormattedString);
    const accountStatement = header + body.reverse().join("\n");

    return accountStatement;
  }

  toFormattedString(transaction) {
    if (typeof transaction.credit === "number")
      transaction.credit = transaction.credit.toFixed(2);
    if (typeof transaction.debit === "number")
      transaction.debit = transaction.debit.toFixed(2);
    if (typeof transaction.balance === "number")
      transaction.balance = transaction.balance.toFixed(2);

    return Object.values(transaction).join(" || ");
  }
}

module.exports = BankAccount;
