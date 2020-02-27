import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

/*
  Final implementation.

  MUST NOT BE CHANGED During feature implementation.
*/

export abstract class BaseRepository {
  constructor(private httpClient: HttpClient) {}

  get<T>(url: string): Observable<T> {
    return this.httpClient.get<T>(url);
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  post(url: string, body?: any, options?: any): Observable<ArrayBuffer> {
    return this.httpClient.post(url, body, options);
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  put(url: string, body?: any, options?: any): Observable<ArrayBuffer> {
    return this.httpClient.put(url, body, options);
  }

  // eslint-disable-next-line @typescript-eslint/explicit-function-return-type, @typescript-eslint/no-explicit-any
  delete(url: string, options?: any) {
    return this.httpClient.delete(url, options);
  }
}
