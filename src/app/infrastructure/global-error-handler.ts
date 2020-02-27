import { ErrorHandler, Injectable } from '@angular/core';

/*
Final implementation.

MUST NOT BE CHANGED during feature implementation.
*/

@Injectable()
export class GlobalErrorHandler implements ErrorHandler {

  handleError(error: Error): void {
    // eslint-disable-next-line no-console
    console.error(error);
  }
}
