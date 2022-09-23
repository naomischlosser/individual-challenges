const BankAccount = require("./bankAccountAccount");

beforeEach(() => {
  date = "2022-01-01";
  dateFormatted = "01/01/2022";
});

describe("integration", () => {
  // test if transactions are added to array
  
  it("prints the account statement after making a deposit", () => {
    const bankAccount = new BankAccount();
    bankAccount.accountDeposit(500.5);

    expect(bankAccount.accountStatement()).toEqual(
      "date || credit || debit || balance" +
        "\n" +
        `${dateFormatted} || £500.50 ||  || £500.50`
    );
  });

  it("prints the account statement after making a deposit and withdrawal", () => {
    const bankAccount = new BankAccount();
    bankAccount.accountDeposit(1000);
    bankAccount.accountWithdrawal(400);

    expect(bankAccount.accountStatement()).toEqual(
      "date || credit || debit || balance" +
        "\n" +
        `${dateFormatted} ||  || £400.00 || £600.00` +
        "\n" +
        `${dateFormatted} || £1,000.00 ||  || £1,000.00`
    );
  });

  it("prints the account statement each time (4x) after making a deposit (2x) and withdrawal (2x)", () => {
    const statement = new Statement();

    // First deposit
    transactionsDouble = [{
      date: new Date(date),
      credit: 100000,
      debit: null,
      balance: 100000,
    }];

    expect(statement.getStatement(transactionsDouble)).toEqual(
      "date || credit || debit || balance" +
        "\n" +
        `${dateFormatted} || £1,000.00 ||  || £1,000.00`
    );

    // First withdrawal
    withdrawalDouble1 = {
      date: new Date(date),
      credit: null,
      debit: 40000,
      balance: 60000,
    };

    expect(statement.getStatement()).toEqual(
      "date || credit || debit || balance" +
        "\n" +
        `${dateFormatted} ||  || £400.00 || £600.00` +
        "\n" +
        `${dateFormatted} || £1,000.00 ||  || £1,000.00`
    );

    // Second deposit
    depositDouble2 = {
      date: new Date(date),
      credit: 50000,
      debit: null,
      balance: 110000,
    };

    statement.addTransaction(depositDouble2);

    expect(statement.getStatement()).toEqual(
      "date || credit || debit || balance" +
        "\n" +
        `${dateFormatted} || £500.00 ||  || £1,100.00` +
        "\n" +
        `${dateFormatted} ||  || £400.00 || £600.00` +
        "\n" +
        `${dateFormatted} || £1,000.00 ||  || £1,000.00`
    );

    // Second withdrawal
    withdrawalDouble2 = {
      date: new Date(date),
      credit: null,
      debit: 20050,
      balance: 89950,
    };

    statement.addTransaction(withdrawalDouble2);

    expect(statement.getStatement()).toEqual(
      "date || credit || debit || balance" +
        "\n" +
        `${dateFormatted} ||  || £200.50 || £899.50` +
        "\n" +
        `${dateFormatted} || £500.00 ||  || £1,100.00` +
        "\n" +
        `${dateFormatted} ||  || £400.00 || £600.00` +
        "\n" +
        `${dateFormatted} || £1,000.00 ||  || £1,000.00`
    );
  });
});
