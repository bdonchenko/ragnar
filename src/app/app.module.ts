import { NgModule } from '@angular/core';
import { BrowserModule, HammerGestureConfig } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './components/app.component';
import { HomeModule } from './components/home/home.module';
import { StoreModule } from './store/store.module';

export class MyHammerConfig extends HammerGestureConfig {
  overrides = {
    swipe: { velocity: 0.4, threshold: 20 } // override default settings
  };
}

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, HomeModule, AppRoutingModule, StoreModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}