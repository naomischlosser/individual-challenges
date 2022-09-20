const Bank = require('./bank');

describe('Bank', () => {
  it('returns a deposit with date, credit, debit and balance', () => {
    const bank = new Bank();
    bank.deposit(500.25, '20/09/2022')

    expect(bank.getTransfers()).toEqual([{
      date: '20/09/2022',
      credit: 500.25,
      debit: null,
      balance: 500.25,
    }]);
  });

  it('returns a withdrawal with date, credit, debit and balance', () => {
    const bank = new Bank();
    bank.withdrawal(500, '20/09/2022')

    expect(bank.getTransfers()).toEqual([{
      date: '20/09/2022',
      credit: null,
      debit: 500,
      balance: -500,
    }]);
  });

  it('returns a deposit and withdrawal with date, credit, debit and balance', () => {
    const bank = new Bank();
    bank.deposit(1000, '16/09/2022')
    bank.withdrawal(500, '20/10/2022')

    expect(bank.getTransfers()).toEqual([
      {
        date: '16/09/2022',
        credit: 1000,
        debit: null,
        balance: 1000,
      },
      {
        date: '20/10/2022',
        credit: null,
        debit: 500,
        balance: 500,
      },
    ]);
  });

  it('prints the account statement after making a deposit', () => {
    const bank = new Bank();
    bank.deposit(500, '20/09/2022')

    expect(bank.printAccountStatement()).toEqual(
      'date || credit || debit || balance' + '\n' +
      '20/09/2022 || 500.00 ||  || 500.00'
    );
  });

  it('prints the account statement after making a deposit and withdrawal', () => {
    const bank = new Bank();
    bank.deposit(1000, '16/09/2022')
    bank.withdrawal(400, '20/10/2022')

    expect(bank.printAccountStatement()).toEqual(
      'date || credit || debit || balance' + '\n' +
      '20/10/2022 ||  || 400.00 || 600.00' + '\n' +
      '16/09/2022 || 1000.00 ||  || 1000.00'
    );
  });

  it('prints the account statement after making a deposit (2x) and withdrawal', () => {
    const bank = new Bank();
    bank.deposit(1000, '10/01/2023')
    bank.deposit(2000, '13/01/2023')
    bank.withdrawal(500, '14/01/2023')

    expect(bank.printAccountStatement()).toEqual(
      'date || credit || debit || balance' + '\n' +
      '14/01/2023 ||  || 500.00 || 2500.00' + '\n' +
      '13/01/2023 || 2000.00 ||  || 3000.00' + '\n' +
      '10/01/2023 || 1000.00 ||  || 1000.00'
    );
  });
});