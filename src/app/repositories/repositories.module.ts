import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ValuesRepository } from 'app/repositories/values.repository';

@NgModule({
  imports: [HttpClientModule],
  providers: [ValuesRepository]
})
export class RepositoriesModule {}
