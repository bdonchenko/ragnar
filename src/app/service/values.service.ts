import { Injectable } from '@angular/core';

@Injectable()
export class ValuesService {
  private current = 1;

  getValue(): number {
    return ++this.current;
  }
}
