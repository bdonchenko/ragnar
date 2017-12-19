import { Injectable } from '@angular/core';

@Injectable()
export class NumberService {
  getRandomValue(): number {
    return Math.random();
  }
}
