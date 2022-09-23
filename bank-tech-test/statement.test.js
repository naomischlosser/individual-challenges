const Statement = require("./statement");

beforeEach(() => {
  date = "2022-02-01";
  dateFormatted = "01/02/2022";
});

describe("Statement", () => {
  it("prints the account statement without any transactions", () => {
    const statement = new Statement();

    transactionsDouble = [];

    expect(statement.getStatement(transactionsDouble)).toEqual(
      "date || credit || debit || balance" + "\n"
    );
  });

  it("prints the account statement after making a deposit", () => {
    const statement = new Statement();

    transactionsDouble = [{
      date: new Date(date),
      credit: 500.5,
      debit: null,
      balance: 500.5,
    }];

    expect(statement.getStatement(transactionsDouble)).toEqual(
      "date || credit || debit || balance" +
        "\n" +
        `${dateFormatted} || 500.50 ||  || 500.50`
    );
  });

  it("prints the account statement after making a deposit and withdrawal", () => {
    const statement = new Statement();

    transactionsDouble = [{
      date: new Date(date),
      credit: 1000,
      debit: null,
      balance: 1000,
    },

    {
      date: new Date(date),
      credit: null,
      debit: 400,
      balance: 600,
    }];

    expect(statement.getStatement(transactionsDouble)).toEqual(
      "date || credit || debit || balance" +
        "\n" +
        `${dateFormatted} ||  || 400.00 || 600.00` +
        "\n" +
        `${dateFormatted} || 1000.00 ||  || 1000.00`
    );
  });

  it("prints the account statement after making a deposit (2x) and withdrawal in reverse chronological order", () => {
    const statement = new Statement();

    date1 = "2022-01-01";
    date2 = "2022-01-02";
    date3 = "2022-01-03";

    transactionsDouble = [{
      date: new Date(date1),
      credit: 1000,
      debit: null,
      balance: 1000,
    },

    {
      date: new Date(date2),
      credit: 2000,
      debit: null,
      balance: 3000,
    },

    {
      date: new Date(date3),
      credit: null,
      debit: 500,
      balance: 2500,
    }];

    expect(statement.getStatement(transactionsDouble)).toEqual(
      "date || credit || debit || balance" +
        "\n" +
        `03/01/2022 ||  || 500.00 || 2500.00` +
        "\n" +
        `02/01/2022 || 2000.00 ||  || 3000.00` +
        "\n" +
        `01/01/2022 || 1000.00 ||  || 1000.00`
    );
  });
});
