const Account = require("./account");

beforeEach(() => {
  date = '2022-01-01'

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
        "01/01/2022 || £500.00 ||  || £500.00"
    );
  });

  xit("prints the account statement after making a deposit and withdrawal", () => {
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

  xit("prints the account statement after making a deposit (2x) and withdrawal", () => {
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

  xit("prints the account statement each time (4x) after making a deposit (2x) and withdrawal (2x)", () => {
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
});
