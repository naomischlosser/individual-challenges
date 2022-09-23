class Statement {
  getStatement(transactions) {
    const header = "date || credit || debit || balance" + "\n";
    const body = transactions.map(this.toFormattedString, this);
    const statement = header + body.reverse().join("\n");

    return statement;
  }

  // Skips transactions that are already formatted
  toFormattedString(transaction) {
    if (Object.prototype.toString.call(transaction.date) === "[object Date]")
      transaction.date = this.formatDate(transaction.date);
    if (typeof transaction.credit === "number")
      transaction.credit = this.formatCurrency(transaction.credit);
    if (typeof transaction.debit === "number")
      transaction.debit = this.formatCurrency(transaction.debit);
    if (typeof transaction.balance === "number")
      transaction.balance = this.formatCurrency(transaction.balance);

    return Object.values(transaction).join(" || ");
  }

  formatDate(date) {
    return (
      ("0" + date.getDate()).slice(-2) +
      "/" +
      ("0" + date.getMonth() + 1).slice(-2) +
      "/" +
      date.getFullYear()
    );
  }

  formatCurrency(value) {
    return value.toFixed(2);
  }
}

module.exports = Statement;
