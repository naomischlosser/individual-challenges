const Transaction = require("./transaction");

beforeEach(() => {
  date = "2022-01-01";

  jest.useFakeTimers().setSystemTime(new Date(date));
});

describe("Transaction", () => {
  it("returns a deposit with date, credit, debit and balance", () => {
    const transaction = new Transaction();

    expect(transaction.deposit(500.25)).toEqual({
      date: new Date(date),
      credit: 500.25,
      debit: null,
      balance: 500.25,
    });
  });

  it("returns a withdrawal with date, credit, debit and balance", () => {
    const transaction = new Transaction();

    expect(transaction.withdrawal(500)).toEqual({
      date: new Date(date),
      credit: null,
      debit: 500.00,
      balance: -500.00,
    });
  });

  it("returns a withdrawal after a deposit with date, credit, debit and balance", () => {
    const transaction = new Transaction();
    transaction.deposit(1000);

    expect(transaction.withdrawal(500.5)).toEqual({
      date: new Date(date),
      credit: null,
      debit: 500.50,
      balance: 499.50,
    });
  });

  it("returns an error when credit/debit is not a number", () => {
    const transaction = new Transaction();

    expect(() => transaction.deposit("500")).toThrow("Credit is not a number!");
    expect(() => transaction.deposit(NaN)).toThrow("Credit is not a number!");
    expect(() => transaction.withdrawal([])).toThrow("Debit is not a number!");
    expect(() => transaction.withdrawal(NaN)).toThrow("Debit is not a number!");
  });
});
