const Transaction = require("./transaction");

describe("Transaction", () => {
  it("returns a deposit with date, credit, debit and balance", () => {
    const transaction = new Transaction();

    expect(transaction.deposit(500.25)).toEqual([
      {
        date: "20/09/2022",
        credit: 50025,
        debit: null,
        balance: 50025,
      },
    ]);
  });

  it("returns a withdrawal with date, credit, debit and balance", () => {
    const transaction = new Transaction();
    
    expect(transaction.withdrawal(500, "20/09/2022")).toEqual([
      {
        date: "20/09/2022",
        credit: null,
        debit: 500,
        balance: -500,
      },
    ]);
  });



  // // Can't test e.g. 01 due to it being an octal number (although it does work in node)
  // it("returns an error when date is not entered as a string", () => {
  //   const transaction = new Transaction();

  //   expect(() => transaction.deposit(500.25, 20 - 10 - 2022)).toThrow(
  //     "Date is not a string!"
  //   );
  //   expect(() => transaction.withdrawal(500.25, 20 / 10 / 2022)).toThrow(
  //     "Date is not a string!"
  //   );
  // });
});