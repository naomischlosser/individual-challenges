const BankAccount = require("./bankAccountAccount");

beforeEach(() => {
  date = "2022-01-01";
  dateFormatted = "01/01/2022";

  jest.useFakeTimers().setSystemTime(new Date(date));
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

  it("prints the account statement each time (2x) after making a deposit and withdrawal", () => {
    const bankAccount = new BankAccount();
    bankAccount.accountDeposit(1000);

    expect(bankAccount.accountStatement()).toEqual(
      "date || credit || debit || balance" +
        "\n" +
        `${dateFormatted} || £1,000.00 ||  || £1,000.00`
    );

    bankAccount.accountWithdrawal(400);

    expect(bankAccount.accountStatement()).toEqual(
      "date || credit || debit || balance" +
        "\n" +
        `${dateFormatted} ||  || £400.00 || £600.00` +
        "\n" +
        `${dateFormatted} || £1,000.00 ||  || £1,000.00`
    );
  });
});
