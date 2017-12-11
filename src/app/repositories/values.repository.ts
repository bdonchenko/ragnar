import { Injectable } from '@angular/core';

@Injectable()
export class ValuesRepository {
  async getData(): Promise<number> {
    //Here will be call to the server
    return Math.random();
  }
}
