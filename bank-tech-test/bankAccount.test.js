const BankAccount = require("./bankAccount");

describe("BankAccount", () => {
  it("returns a deposit with date (DD/MM/YYYY), credit, debit and balance", () => {
    const bankAccount = new BankAccount();
    bankAccount.deposit(500.25, "20/09/2022");

    expect(bankAccount.getTransactions()).toEqual([
      {
        date: "20/09/2022",
        credit: 500.25,
        debit: null,
        balance: 500.25,
      },
    ]);
  });

  it("returns a deposit with date (DD-MM-YYYY), credit, debit and balance", () => {
    const bankAccount = new BankAccount();
    bankAccount.deposit(500.25, "20-09-2022");

    expect(bankAccount.getTransactions()).toEqual([
      {
        date: "20/09/2022",
        credit: 500.25,
        debit: null,
        balance: 500.25,
      },
    ]);
  });

  it("returns a withdrawal with date (DD/MM/YYYY), credit, debit and balance", () => {
    const bankAccount = new BankAccount();
    bankAccount.withdrawal(500, "20/09/2022");

    expect(bankAccount.getTransactions()).toEqual([
      {
        date: "20/09/2022",
        credit: null,
        debit: 500,
        balance: -500,
      },
    ]);
  });

  it("returns a withdrawal with date (DD-MM-YYYY), credit, debit and balance", () => {
    const bankAccount = new BankAccount();
    bankAccount.withdrawal(500, "20-09-2022");

    expect(bankAccount.getTransactions()).toEqual([
      {
        date: "20/09/2022",
        credit: null,
        debit: 500,
        balance: -500,
      },
    ]);
  });

  it("returns a deposit and withdrawal with date, credit, debit and balance", () => {
    const bankAccount = new BankAccount();
    bankAccount.deposit(1000, "16/09/2022");
    bankAccount.withdrawal(500, "20/10/2022");

    expect(bankAccount.getTransactions()).toEqual([
      {
        date: "16/09/2022",
        credit: 1000,
        debit: null,
        balance: 1000,
      },
      {
        date: "20/10/2022",
        credit: null,
        debit: 500,
        balance: 500,
      },
    ]);
  });

  it("prints the account statement after making a deposit", () => {
    const bankAccount = new BankAccount();
    bankAccount.deposit(500, "20/09/2022");

    expect(bankAccount.printStatement()).toEqual(
      "date || credit || debit || balance" +
        "\n" +
        "20/09/2022 || 500.00 ||  || 500.00"
    );
  });

  it("prints the account statement after making a deposit and withdrawal", () => {
    const bankAccount = new BankAccount();
    bankAccount.deposit(1000, "16/09/2022");
    bankAccount.withdrawal(400, "20/10/2022");

    expect(bankAccount.printStatement()).toEqual(
      "date || credit || debit || balance" +
        "\n" +
        "20/10/2022 ||  || 400.00 || 600.00" +
        "\n" +
        "16/09/2022 || 1000.00 ||  || 1000.00"
    );
  });

  it("prints the account statement after making a deposit (2x) and withdrawal", () => {
    const bankAccount = new BankAccount();
    bankAccount.deposit(1000, "10/01/2023");
    bankAccount.deposit(2000, "13/01/2023");
    bankAccount.withdrawal(500, "14/01/2023");

    expect(bankAccount.printStatement()).toEqual(
      "date || credit || debit || balance" +
        "\n" +
        "14/01/2023 ||  || 500.00 || 2500.00" +
        "\n" +
        "13/01/2023 || 2000.00 ||  || 3000.00" +
        "\n" +
        "10/01/2023 || 1000.00 ||  || 1000.00"
    );
  });

  it("prints the account statement each time (4x) after making a deposit (2x) and withdrawal (2x)", () => {
    const bankAccount = new BankAccount();
    bankAccount.deposit(1000, "16/09/2022");

    expect(bankAccount.printStatement()).toEqual(
      "date || credit || debit || balance" +
        "\n" +
        "16/09/2022 || 1000.00 ||  || 1000.00"
    );

    bankAccount.withdrawal(400, "20/10/2022");

    expect(bankAccount.printStatement()).toEqual(
      "date || credit || debit || balance" +
        "\n" +
        "20/10/2022 ||  || 400.00 || 600.00" +
        "\n" +
        "16/09/2022 || 1000.00 ||  || 1000.00"
    );

    bankAccount.deposit(500, "23/10/2022");

    expect(bankAccount.printStatement()).toEqual(
      "date || credit || debit || balance" +
        "\n" +
        "23/10/2022 || 500.00 ||  || 1100.00" +
        "\n" +
        "20/10/2022 ||  || 400.00 || 600.00" +
        "\n" +
        "16/09/2022 || 1000.00 ||  || 1000.00"
    );

    bankAccount.withdrawal(200.5, "28/11/2022");

    expect(bankAccount.printStatement()).toEqual(
      "date || credit || debit || balance" +
        "\n" +
        "28/11/2022 ||  || 200.50 || 899.50" +
        "\n" +
        "23/10/2022 || 500.00 ||  || 1100.00" +
        "\n" +
        "20/10/2022 ||  || 400.00 || 600.00" +
        "\n" +
        "16/09/2022 || 1000.00 ||  || 1000.00"
    );
  });

  // Can't test e.g. 01 due to it being an octal number (although it does work in node)
  it("returns an error when date is not entered as a string", () => {
    const bankAccount = new BankAccount();

    expect(() => bankAccount.deposit(500.25, 20 - 10 - 2022)).toThrow(
      "Date is not a string!"
    );
    expect(() => bankAccount.withdrawal(500.25, 20 / 10 / 2022)).toThrow(
      "Date is not a string!"
    );
  });

  it("prints the account statement without any transactions", () => {
    const bankAccount = new BankAccount();

    expect(bankAccount.printStatement()).toEqual(
      "date || credit || debit || balance" + "\n"
    );
  });
});
