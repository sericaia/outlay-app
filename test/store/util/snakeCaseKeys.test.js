const snakeCaseKeys = require('../../../store/util/snakeCaseKeys');

describe('snakeCaseKeys()', () => {
  it('should apply snake case to object keys', () => {
    const obj = {
      id: '0',
      paidBy: 'person1',
    };

    const snakeObj = {
      id: '0',
      paid_by: 'person1',
    };

    expect(snakeCaseKeys(obj)).toEqual(snakeObj);
  });
});
