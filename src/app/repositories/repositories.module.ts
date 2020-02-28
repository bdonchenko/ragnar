import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { RequestLoggingInterceptor } from './interceptors/request-logging.interceptor';
import { ValuesRepository } from './values.repository';

@NgModule({
  imports: [HttpClientModule],
  providers: [
    ValuesRepository,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: RequestLoggingInterceptor,
      multi: true,
    },
  ],
})
export class RepositoriesModule {}
