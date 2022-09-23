const Statement = require("./statement");

beforeEach(() => {
  date = "2022-01-01";
  dateFormatted = "01/01/2022";

  jest.useFakeTimers().setSystemTime(new Date(date));
});

describe("Statement", () => {
  it("prints the account statement without any transactions", () => {
    const statement = new Statement();

    expect(statement.printStatement()).toEqual(
      "date || credit || debit || balance" + "\n"
    );
  });

  it("prints the account statement after making a deposit", () => {
    const statement = new Statement();

    transactionDouble = [{
      date: new Date(date),
      credit: 50000,
      debit: null,
      balance: 50000,
    }];

    expect(statement.printStatement()).toEqual(
      "date || credit || debit || balance" +
        "\n" +
        `${dateFormatted} || £500.00 ||  || £500.00`
    );
  });

  it("prints the account statement after making a deposit and withdrawal", () => {
    const statement = new Statement();

    depositDouble = {
      date: new Date(date),
      credit: 100000,
      debit: null,
      balance: 100000,
    };

    withdrawalDouble = {
      date: new Date(date),
      credit: null,
      debit: 40000,
      balance: 60000,
    };

    statement.addTransaction(depositDouble);
    statement.addTransaction(withdrawalDouble);

    expect(statement.printStatement()).toEqual(
      "date || credit || debit || balance" +
        "\n" +
        `${dateFormatted} ||  || £400.00 || £600.00` +
        "\n" +
        `${dateFormatted} || £1,000.00 ||  || £1,000.00`
    );
  });

  it("prints the account statement after making a deposit (2x) and withdrawal in reverse chronocal order", () => {
    const statement = new Statement();

    depositDouble1 = {
      date: new Date(date),
      credit: 100000,
      debit: null,
      balance: 100000,
    };

    depositDouble2 = {
      date: new Date(date),
      credit: 200000,
      debit: null,
      balance: 300000,
    };

    withdrawalDouble = {
      date: new Date(date),
      credit: null,
      debit: 50000,
      balance: 250000,
    };

    statement.addTransaction(depositDouble1);
    statement.addTransaction(depositDouble2);
    statement.addTransaction(withdrawalDouble);

    expect(statement.printStatement()).toEqual(
      "date || credit || debit || balance" +
        "\n" +
        `${dateFormatted} ||  || £500.00 || £2,500.00` +
        "\n" +
        `${dateFormatted} || £2,000.00 ||  || £3,000.00` +
        "\n" +
        `${dateFormatted} || £1,000.00 ||  || £1,000.00`
    );
  });

  it("prints the account statement each time (4x) after making a deposit (2x) and withdrawal (2x)", () => {
    const statement = new Statement();

    // First deposit
    depositDouble1 = {
      date: new Date(date),
      credit: 100000,
      debit: null,
      balance: 100000,
    };

    statement.addTransaction(depositDouble1);

    expect(statement.printStatement()).toEqual(
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

    statement.addTransaction(withdrawalDouble1);

    expect(statement.printStatement()).toEqual(
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

    expect(statement.printStatement()).toEqual(
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

    expect(statement.printStatement()).toEqual(
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
