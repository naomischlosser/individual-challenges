const Bank = require('./bank');

describe('Bank', () => {
  it('returns a deposit date, credit, debit and balance', () => {
    const bank = new Bank();
    expect(bank.deposit(500, '20/09/2022')).toEqual({
      date: '20/09/2022',
      credit: 500.00,
      debit: 0,
      balance: 500.00,
    });
  });
});