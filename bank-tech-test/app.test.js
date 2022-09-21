const app = require("./app");

beforeEach(() => {
  date = '2022-01-01'
  dateFormatted = '01/01/2022'

  jest
    .useFakeTimers()
    .setSystemTime(new Date(date));
});

describe("integration", () => {
  it("prints the account statement after making a deposit", () => {
    // const app = new App();
    // app.deposit(500);

    // expect(Account.printStatement()).toEqual(
    //   "date || credit || debit || balance" +
    //     "\n" +
    //     `${dateFormatted} || £500.00 ||  || £500.00`
    // );

    transaction.deposit(500);
  });

  xit("prints the account statement after making a withdrawal", () => {
    const Account = new Account();
    Account.deposit(1000, "16/09/2022");
    Account.withdrawal(400, "20/10/2022");

    expect(Account.printStatement()).toEqual(
      "date || credit || debit || balance" +
        "\n" +
        "20/10/2022 ||  || 400.00 || 600.00" +
        "\n" +
        "16/09/2022 || 1000.00 ||  || 1000.00"
    );
  });

  xit("prints the account statement after making a deposit and withdrawal", () => {
    const Account = new Account();
    Account.deposit(1000, "16/09/2022");
    Account.withdrawal(400, "20/10/2022");

    expect(Account.printStatement()).toEqual(
      "date || credit || debit || balance" +
        "\n" +
        "20/10/2022 ||  || 400.00 || 600.00" +
        "\n" +
        "16/09/2022 || 1000.00 ||  || 1000.00"
    );
  });
});