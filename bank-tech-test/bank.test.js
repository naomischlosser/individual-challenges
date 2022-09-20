const Bank = require('./bank');

describe('Bank', () => {
  it('returns a deposit with date, credit, debit and balance', () => {
    const bank = new Bank();
    expect(bank.deposit(500, '20/09/2022')).toEqual({
      date: '20/09/2022',
      credit: 500.00,
      debit: 0,
      balance: 500.00,
    });
  });

  it('returns a withdrawel with date, credit, debit and balance', () => {
    const bank = new Bank();
    expect(bank.withdrawal(500, '20/09/2022')).toEqual({
      date: '20/09/2022',
      credit: 0,
      debit: 500.00,
      balance: -500.00,
    });
  });
});