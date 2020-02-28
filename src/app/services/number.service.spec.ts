import { NumberService } from '@services/number.service';

describe('NumberService', () => {
  describe('getRandomValue', () => {
    test('getRandomValue returns data', () => {

      const sut = new NumberService()

      expect(sut.getRandomValue()).not.toBeNull();
    });
  });
});
