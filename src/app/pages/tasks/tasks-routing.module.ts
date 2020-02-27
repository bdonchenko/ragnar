import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TasksPageComponent } from './tasks-page.component';


const routes: Routes = [
  {
    path: '',
    component: TasksPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TasksRoutingModule { }
