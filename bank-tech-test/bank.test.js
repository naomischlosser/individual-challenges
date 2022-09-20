const Bank = require('./bank');

describe('Bank', () => {
  it('returns a deposit with date, credit, debit and balance', () => {
    const bank = new Bank();
    bank.deposit(500.25, '20/09/2022')

    expect(bank.getTransfers()).toEqual([{
      date: '20/09/2022',
      credit: 500.25,
      debit: 0,
      balance: 500.25,
    }]);
  });

  it('returns a withdrawal with date, credit, debit and balance', () => {
    const bank = new Bank();
    bank.withdrawal(500, '20/09/2022')

    expect(bank.getTransfers()).toEqual([{
      date: '20/09/2022',
      credit: 0,
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
        debit: 0,
        balance: 1000,
      },
      {
        date: '20/10/2022',
        credit: 0,
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
});