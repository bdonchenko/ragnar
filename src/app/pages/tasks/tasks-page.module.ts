import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TasksRoutingModule } from './tasks-routing.module';
import { TasksPageComponent } from './tasks-page.component';


@NgModule({
  imports: [CommonModule, TasksRoutingModule],
  exports: [TasksPageComponent],
  declarations: [TasksPageComponent]
})
export class TasksPageModule { }
