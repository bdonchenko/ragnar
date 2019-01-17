import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { HomeDataComponent } from '@components/home/home-data.component/home-data.component';
import { HomeComponent } from '@components/home/home.component';

@NgModule({
  imports: [CommonModule],
  exports: [HomeComponent],
  declarations: [HomeComponent, HomeDataComponent]
})
export class HomeModule {}
