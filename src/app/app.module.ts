import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler } from '@angular/core';
import { TasksPageModule } from './pages/tasks/tasks-page.module';
import { HomePageModule } from './pages/home/home-page.module';
import { ServicesModule } from './services/services.module';
import { RepositoriesModule } from './repositories/repositories.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GlobalErrorHandler } from './infrastructure/global-error-handler';
import { AppStore } from './app.store';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RepositoriesModule,
    ServicesModule,
    HomePageModule,
    TasksPageModule
  ],
  providers: [
    {
      provide: ErrorHandler,
      useClass: GlobalErrorHandler
    },
    AppStore
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
