import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BaseRepository } from 'app/repositories/base-repository';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class ValuesRepository extends BaseRepository {
  private counter: number = 0;

  constructor(httpClient: HttpClient) {
    super(httpClient);
  }

  getData(): Observable<number> {
    //Here will be call to the server
    // return this.get<string>('https://api.github.com').map(d => {
    //   return d.toString().length + this.counter++;
    // });

    return Observable.of(++this.counter);
  }
}
