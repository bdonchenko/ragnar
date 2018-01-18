import { ErrorHandler, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ActionsModule } from 'app/actions/actions.module';
import { AppRoutingModule } from 'app/app-routing.module';
import { AppComponent } from 'app/components/app.component';
import { HomeModule } from 'app/components/home/home.module';
import { TasksModule } from 'app/components/tasks/tasks.module';
import { GlobalErrorHandler } from 'app/infrastructure/global-error-handler';
import { RepositoriesModule } from 'app/repositories/repositories.module';
import { ServicesModule } from 'app/services/services.module';
import { StoreModule } from 'app/store/store.module';

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
  providers: [{
    provide: ErrorHandler,
    useClass: GlobalErrorHandler
  }]
})
export class AppModule {}
