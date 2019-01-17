import { NgModule } from '@angular/core';
import { HomeStore } from '@stores/home.store';

@NgModule({
  providers: [HomeStore]
})
export class StoreModule {}
