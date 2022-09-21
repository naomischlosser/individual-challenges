const Transaction = require("./transaction");

jest
  .useFakeTimers()
  .setSystemTime(new Date('2022-01-01'));

describe("Transaction", () => {
  it("returns a deposit with date, credit, debit and balance", () => {
    const transaction = new Transaction();

    expect(transaction.deposit(500.25)).toEqual(
      {
        date: "01/01/2022",
        credit: 50025,
        debit: null,
        balance: 50025,
      },
    );
  });

  it("returns a withdrawal with date, credit, debit and balance", () => {
    const transaction = new Transaction();
    
    expect(transaction.withdrawal(500)).toEqual(
      {
        date: "01/01/2022",
        credit: null,
        debit: 50000,
        balance: -50000,
      },
    );
  });

  it("returns a withdrawal after a deposit with date, credit, debit and balance", () => {
    const transaction = new Transaction();
    transaction.deposit(1000)

    expect(transaction.withdrawal(500.50)).toEqual(
      {
        date: "01/01/2022",
        credit: null,
        debit: 50050,
        balance: 49950,
      },
    );
  });

  it("returns an error when credit/debit is not a number", () => {
    const transaction = new Transaction();

    expect(() => transaction.deposit('500')).toThrow(
      "Credit is not a number!"
    );
    expect(() => transaction.deposit(NaN)).toThrow(
      "Credit is not a number!"
    );
    expect(() => transaction.withdrawal([])).toThrow(
      "Debit is not a number!"
    );
    expect(() => transaction.withdrawal(NaN)).toThrow(
      "Debit is not a number!"
    );
  });
});