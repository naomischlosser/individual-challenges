const Account = require("./Account");
const Transaction = require("./transaction");

const account = new Account();
const transaction = new Transaction();

class App {
  constructor() {
    this.account = new Account();
    this.transaction = new Transaction();
  };
}

module.exports = app;