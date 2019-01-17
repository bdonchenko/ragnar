import { ActionsModule } from '@actions/actions.module';
import { ErrorHandler, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from '@components/app.component';
import { HomeModule } from '@components/home/home.module';
import { TasksModule } from '@components/tasks/tasks.module';
import { RepositoriesModule } from '@repositories/repositories.module';
import { ServicesModule } from '@services/services.module';
import { StoreModule } from '@stores/store.module';
import { AppRoutingModule } from 'app/app-routing.module';
import { GlobalErrorHandler } from 'app/infrastructure/global-error-handler';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    HomeModule,
    TasksModule,
    AppRoutingModule,
    ActionsModule,
    StoreModule,
    ServicesModule,
    RepositoriesModule
  ],
  bootstrap: [AppComponent],
  providers: [
    {
      provide: ErrorHandler,
      useClass: GlobalErrorHandler
    }
  ]
})
export class AppModule {}
