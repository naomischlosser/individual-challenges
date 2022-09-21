const Account = require("./account");

beforeEach(() => {
  date = '2022-01-01'
  dateFormatted = '01/01/2022'

  jest
    .useFakeTimers()
    .setSystemTime(new Date(date));
});

describe("Account", () => {
  it("prints the account statement without any transactions", () => {
    const account = new Account();

    expect(account.printStatement()).toEqual(
      "date || credit || debit || balance" + "\n"
    );
  });

  it("prints the account statement after making a deposit", () => {
    const account = new Account();

    depositDouble = {
      date: new Date(date),
      credit: 50000,
      debit: null,
      balance: 50000,
    };

    account.addTransaction(depositDouble);

    expect(account.printStatement()).toEqual(
      "date || credit || debit || balance" +
        "\n" +
        `${dateFormatted} || £500.00 ||  || £500.00`
    );
  });

  it("prints the account statement after making a deposit and withdrawal", () => {
    const account = new Account();

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

    account.addTransaction(depositDouble);
    account.addTransaction(withdrawalDouble);

    expect(account.printStatement()).toEqual(
      "date || credit || debit || balance" +
        "\n" +
        `${dateFormatted} ||  || £400.00 || £600.00` +
        "\n" +
        `${dateFormatted} || £1,000.00 ||  || £1,000.00`
    );
  });

  it("prints the account statement after making a deposit (2x) and withdrawal", () => {
    const account = new Account();

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

    account.addTransaction(depositDouble1);
    account.addTransaction(depositDouble2);
    account.addTransaction(withdrawalDouble);

    expect(account.printStatement()).toEqual(
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
    const account = new Account();

    // First deposit
    depositDouble1 = {
      date: new Date(date),
      credit: 100000,
      debit: null,
      balance: 100000,
    };

    account.addTransaction(depositDouble1);

    expect(account.printStatement()).toEqual(
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

    account.addTransaction(withdrawalDouble1);

    expect(account.printStatement()).toEqual(
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

    account.addTransaction(depositDouble2);

    expect(account.printStatement()).toEqual(
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

    account.addTransaction(withdrawalDouble2);

    expect(account.printStatement()).toEqual(
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
