import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { HomeDataComponent } from 'app/components/home/home-data.component/home-data.component';
import { HomeComponent } from './home.component';

@NgModule({
  imports: [ CommonModule ],
  exports: [HomeComponent],
  declarations: [HomeComponent, HomeDataComponent]
})
export class HomeModule {}
