import { NgModule } from '@angular/core';
import { ValuesRepository } from 'app/repositories/values-repository';

@NgModule({
  providers: [ValuesRepository]
})
export class RepositoriesModule {}
