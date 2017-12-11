import { NgModule } from '@angular/core';
import { HomeUpdatedAction } from 'app/actions/home/home-updated-action';

@NgModule({
  providers: [HomeUpdatedAction]
})
export class ActionsModule {}
