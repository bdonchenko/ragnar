import { GlobalErrorHandler } from './global-error-handler';

describe('GlobalErrorHandler', () => {
  describe('handleError', () => {
    test('calls console.error', () => {
      // eslint-disable-next-line no-console
      console.error = jest.fn();
      const err = {} as Error;

      const sut = new GlobalErrorHandler();

      sut.handleError(err);

      // eslint-disable-next-line no-console
      expect(console.error).toBeCalledWith(err);
    });
  });
});
