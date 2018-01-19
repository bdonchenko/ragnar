import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

/* 
  Final implementation.

  MUST NOT BE CHANGED During feature implementation.
*/

export abstract class BaseRepository {
  constructor(private httpClient: HttpClient) {}

  get<T>(url: string): Observable<T> {
    return this.httpClient.get<T>(url);
  }

  // tslint:disable-next-line:no-any
  post(url: string, body?: any, options?: any): Observable<ArrayBuffer> {
    return this.httpClient.post(url, body, options);
  }

  // tslint:disable-next-line:no-any
  put(url: string, body?: any, options?: any): Observable<ArrayBuffer> {
    return this.httpClient.put(url, body, options);
  }

  // tslint:disable-next-line:no-any
  delete(url: string, options?: any) {
    return this.httpClient.delete(url, options);
  }
}
