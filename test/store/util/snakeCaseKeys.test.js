const snakeCaseKeys = require('../../../store/util/snakeCaseKeys');

describe('snakeCaseKeys()', () => {
  it('should apply snake case to object keys', () => {
    const obj = {
      id: '0',
      payedBy: 'person1',
    };

    const snakeObj = {
      id: '0',
      payed_by: 'person1',
    };

    expect(snakeCaseKeys(obj)).toEqual(snakeObj);
  });
});
