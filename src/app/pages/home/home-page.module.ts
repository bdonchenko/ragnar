import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ServerUpdatedCommand } from './commands/server-updated.command';
import { HomeRoutingModule } from './home-routing.module';

import { HomePageComponent } from './home-page.component';
import { DataComponent } from './components/home-data.component/data.component';
import { HomeStore } from "./home.store";
import { UpdatedCommand } from './commands/updated.command';

@NgModule({
  imports: [CommonModule, HomeRoutingModule],
  exports: [HomePageComponent],
  declarations: [HomePageComponent, DataComponent],
  providers: [HomeStore, UpdatedCommand, ServerUpdatedCommand]
})
export class HomePageModule { }
