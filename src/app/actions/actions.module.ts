import { HomeServerUpdatedAction } from '@actions/home/home-server-updated.action';
import { HomeUpdatedAction } from '@actions/home/home-updated.action';
import { NgModule } from '@angular/core';

@NgModule({
  providers: [HomeUpdatedAction, HomeServerUpdatedAction]
})
export class ActionsModule {}
