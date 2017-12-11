import { NgModule } from '@angular/core';
import { HomeServerUpdatedAction } from 'app/actions/home/home-server-updated-action';
import { HomeUpdatedAction } from 'app/actions/home/home-updated-action';

@NgModule({
  providers: [HomeUpdatedAction, HomeServerUpdatedAction]
})
export class ActionsModule {}
