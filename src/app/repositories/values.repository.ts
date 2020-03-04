import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { BaseRepository } from './base-repository';

@Injectable()
export class ValuesRepository extends BaseRepository {
  private counter = 0;

  constructor(httpClient: HttpClient) {
    super(httpClient);
  }

  getData(): Observable<number> {
    // Here will be call to the server
    return this.get<[]>('WeatherForecast').pipe(map(d => {
      this.counter += 1;
      return d.toString().length + this.counter;
    }));
    // this.counter += 1;
    // return of(this.counter);
  }
}
