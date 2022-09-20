const Bank = require('./bank');

describe('Bank', () => {
  it('returns a deposit value and date', () => {
    const bank = new Bank();
    expect(bank.deposit(500, '20/09/2022')).toEqual( {credit: 500.00, date: '20/09/2022'} )
  });
});