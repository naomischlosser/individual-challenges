const Bank = require("./bank");

beforeEach(() => {
  date = '2022-01-01'
  dateFormatted = '01/01/2022'

  jest
    .useFakeTimers()
    .setSystemTime(new Date(date));
});

describe("integration", () => {
  it("prints the account statement after making a deposit", () => {
    const bank = new Bank();
    bank.accountDeposit(500.50);
    
    expect(bank.accountStatement()).toEqual(
      "date || credit || debit || balance" +
        "\n" +
        `${dateFormatted} || £500.50 ||  || £500.50`
    );
  });

  it("prints the account statement after making a deposit and withdrawal", () => {
    const bank = new Bank();
    bank.accountDeposit(1000);
    bank.accountWithdrawal(400);

    expect(bank.accountStatement()).toEqual(
      "date || credit || debit || balance" +
        "\n" +
        `${dateFormatted} ||  || £400.00 || £600.00` +
        "\n" +
        `${dateFormatted} || £1,000.00 ||  || £1,000.00`
    );
  });

  it("prints the account statement each time (2x) after making a deposit and withdrawal", () => {
    const bank = new Bank();
    bank.accountDeposit(1000);

    expect(bank.accountStatement()).toEqual(
      "date || credit || debit || balance" +
        "\n" +
        `${dateFormatted} || £1,000.00 ||  || £1,000.00`
    );

    bank.accountWithdrawal(400);

    expect(bank.accountStatement()).toEqual(
      "date || credit || debit || balance" +
        "\n" +
        `${dateFormatted} ||  || £400.00 || £600.00` +
        "\n" +
        `${dateFormatted} || £1,000.00 ||  || £1,000.00`
    );
  });
});