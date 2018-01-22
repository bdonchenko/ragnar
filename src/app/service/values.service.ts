import { Injectable } from '@angular/core';

@Injectable()
export class ValuesService {
  private current = 0;

  getValue(): number {
    return this.current++;
  }
}
