import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
  HttpResponse,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable()
export class RequestLoggingInterceptor implements HttpInterceptor {
  intercept(
    req: HttpRequest<object>,
    next: HttpHandler,
  ): Observable<HttpEvent<object>> {
    const started = Date.now();
    return next.handle(req).pipe(
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
