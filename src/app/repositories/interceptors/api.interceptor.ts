import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
  HttpResponse,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { tap } from 'rxjs/operators';

@Injectable()
export class ApiInterceptor implements HttpInterceptor {
  intercept(
    req: HttpRequest<object>,
    next: HttpHandler,
  ): Observable<HttpEvent<object>> {
    const headers = req.headers
      .append('Content-Type', 'application/json')
      .append('Accept', 'application/json')
      .append('Access-Control-Allow-Methods', '*')
      .append('Access-Control-Allow-Origin', '*');

    const newReq = req.clone({ headers, url: environment.baseURL + req.url })

    const started = Date.now();
    return next.handle(newReq).pipe(
      tap(event => {
        if (event instanceof HttpResponse) {
          const elapsed = Date.now() - started;
          // eslint-disable-next-line no-console
          console.log(`Request for ${req.urlWithParams} took ${elapsed} ms.`);
        }
      }),
    );
  }
}
