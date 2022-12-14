const BankAccount = require("./bankAccount");

beforeEach(() => {
  date = "2022-01-01";
  dateFormatted = "01/01/2022";

  jest.useFakeTimers().setSystemTime(new Date(date));
});

describe("integration", () => {
  it("returns an array of transactions after making a deposit and withdrawal", () => {
    const bankAccount = new BankAccount();
    bankAccount.addDeposit(500);
    bankAccount.makeWithdrawal(300);

    expect(bankAccount.transactions).toEqual([{
      date: new Date(date),
      credit: 500,
      debit: null,
      balance: 500,
    },

    {
      date: new Date(date),
      credit: null,
      debit: 300,
      balance: 200,
    }]);
  });
  
  it("prints the account statement after making a deposit", () => {
    const bankAccount = new BankAccount();
    bankAccount.addDeposit(500.5);

    expect(bankAccount.printStatement()).toEqual(
      "date || credit || debit || balance" +
        "\n" +
        `${dateFormatted} || 500.50 ||  || 500.50`
    );
  });

  it("prints the account statement after making a deposit and withdrawal", () => {
    const bankAccount = new BankAccount();
    bankAccount.addDeposit(1000);
    bankAccount.makeWithdrawal(400);

    expect(bankAccount.printStatement()).toEqual(
      "date || credit || debit || balance" +
        "\n" +
        `${dateFormatted} ||  || 400.00 || 600.00` +
        "\n" +
        `${dateFormatted} || 1000.00 ||  || 1000.00`
    );
  });

  it("prints the account statement each time (4x) after making a deposit (2x) and withdrawal (2x)", () => {
    const bankAccount = new BankAccount();

    // First deposit
    bankAccount.addDeposit(1000);

    expect(bankAccount.printStatement()).toEqual(
      "date || credit || debit || balance" +
        "\n" +
        `${dateFormatted} || 1000.00 ||  || 1000.00`
    );

    // First withdrawal
    bankAccount.makeWithdrawal(400);

    expect(bankAccount.printStatement()).toEqual(
      "date || credit || debit || balance" +
        "\n" +
        `${dateFormatted} ||  || 400.00 || 600.00` +
        "\n" +
        `${dateFormatted} || 1000.00 ||  || 1000.00`
    );

    // Second deposit
    bankAccount.addDeposit(500);

    expect(bankAccount.printStatement()).toEqual(
      "date || credit || debit || balance" +
        "\n" +
        `${dateFormatted} || 500.00 ||  || 1100.00` +
        "\n" +
        `${dateFormatted} ||  || 400.00 || 600.00` +
        "\n" +
        `${dateFormatted} || 1000.00 ||  || 1000.00`
    );

    // Second withdrawal
    bankAccount.makeWithdrawal(200.50);

    expect(bankAccount.printStatement()).toEqual(
      "date || credit || debit || balance" +
        "\n" +
        `${dateFormatted} ||  || 200.50 || 899.50` +
        "\n" +
        `${dateFormatted} || 500.00 ||  || 1100.00` +
        "\n" +
        `${dateFormatted} ||  || 400.00 || 600.00` +
        "\n" +
        `${dateFormatted} || 1000.00 ||  || 1000.00`
    );
  });
});
