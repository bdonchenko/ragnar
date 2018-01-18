import { ErrorHandler, Injectable } from '@angular/core';

@Injectable()
export class GlobalErrorHandler implements ErrorHandler {
  constructor() {}
  // tslint:disable-next-line:no-any
  handleError(error: any): void {
    // tslint:disable-next-line:no-console
    console.log(error);
  }
}
