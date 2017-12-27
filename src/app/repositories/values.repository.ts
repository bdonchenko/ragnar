import { Injectable } from '@angular/core';

@Injectable()
export class ValuesRepository {
  private value = 0;

  async getData(): Promise<number> {
    //Here will be call to the server
    return this.value++;
  }
}
