import { NgModule } from '@angular/core';
import { HomeDataComponent } from 'app/components/home/home-data.component.ts/home-data.component';
import { SharedModule } from '../shared/shared.module';
import { HomeComponent } from './home.component';

@NgModule({
  imports: [SharedModule],
  exports: [HomeComponent],
  declarations: [HomeComponent, HomeDataComponent]
})
export class HomeModule {}
