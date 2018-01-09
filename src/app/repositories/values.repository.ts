import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

/* 
    According to Angular documentation about HttpClient, all of the server calls return instance of Observable class, 
    so every repository method will have the same signature like HttpClient:
    
    class HttpClient {
      constructor(handler: HttpHandler)
      request(first: string | HttpRequest<any>, url?: string, options: {...}): Observable<any>
      delete(url: string, options: {...}): Observable<any>
      get(url: string, options: {...}): Observable<any>
      head(url: string, options: {...}): Observable<any>
      jsonp<T>(url: string, callbackParam: string): Observable<T>
      options(url: string, options: {...}): Observable<any>
      patch(url: string, body: any | null, options: {...}): Observable<any>
      post(url: string, body: any | null, options: {...}): Observable<any>
      put(url: string, body: any | null, options: {...}): Observable<any>
    }
*/

@Injectable()
export class ValuesRepository {
  private value = 0;

  getData(): Observable<number> {
    //Here will be call to the server
    return Observable.of(++this.value);
  }
}
