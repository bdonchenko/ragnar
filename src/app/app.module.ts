import { NgModule } from '@angular/core';
import { BrowserModule, HammerGestureConfig } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeModule } from './modules/home/home.module';

export class MyHammerConfig extends HammerGestureConfig {
  overrides = <any>{
    swipe: { velocity: 0.4, threshold: 20 } // override default settings
  };
}

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, HomeModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}