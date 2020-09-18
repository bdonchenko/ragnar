import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ValuesRepository } from './values.repository';
import { ApiInterceptor } from './interceptors/api.interceptor';

@NgModule({
  imports: [HttpClientModule],
  providers: [
    ValuesRepository,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ApiInterceptor,
      multi: true,
    },
  ],
})
export class RepositoriesModule {}
