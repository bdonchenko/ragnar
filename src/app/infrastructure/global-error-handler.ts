import { ErrorHandler, Injectable } from '@angular/core';

/*
Final implementation. 

MUST NOT BE CHANGED during feature implementation.
*/

@Injectable()
export class GlobalErrorHandler implements ErrorHandler {
  constructor() {}
  // tslint:disable-next-line:no-any
  handleError(error: any): void {
    // tslint:disable-next-line:no-console
    console.error(error);
  }
}
