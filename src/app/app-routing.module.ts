import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  {
    path: 'home',
    loadChildren: () =>
      import('./pages/home/home-page.module').then((m) => m.HomePageModule),
  },
  {
    path: 'tasks',
    loadChildren: () =>
      import('./pages/tasks/tasks-page.module').then((m) => m.TasksPageModule),
  },
  {
    path: '**',
    loadChildren: () =>
      import('./pages/home/home-page.module').then((m) => m.HomePageModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
