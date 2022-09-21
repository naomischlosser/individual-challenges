class BankAccount {
  constructor() {
    this.transactions = [];
  }

  addTransaction(transaction) {
    this.transactions(transaction);
  }

  printStatement() {
    const header = "date || credit || debit || balance" + "\n";
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
