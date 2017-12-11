import { NgModule } from '@angular/core';
import { BrowserModule, HammerGestureConfig } from '@angular/platform-browser';
import { ActionsModule } from 'app/actions/actions.module';
import { AppRoutingModule } from 'app/app-routing.module';
import { AppComponent } from 'app/components/app.component';
import { HomeModule } from 'app/components/home/home.module';
import { RepositoriesModule } from 'app/repositories/repositories.module';
import { ServicesModule } from 'app/services/services.module';
import { StoreModule } from 'app/store/store.module';

export class MyHammerConfig extends HammerGestureConfig {
  overrides = {
    swipe: { velocity: 0.4, threshold: 20 } // override default settings
  };
}

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    HomeModule,
    AppRoutingModule,
    ActionsModule,
    StoreModule,
    ServicesModule,
    RepositoriesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
