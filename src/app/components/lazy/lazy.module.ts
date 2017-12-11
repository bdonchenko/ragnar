import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { LazyComponent } from './lazy.component';

const routes: Routes = [{ path: '', component: LazyComponent }];

@NgModule({
  imports: [SharedModule, RouterModule.forChild(routes)],
  exports: [LazyComponent],
  declarations: [LazyComponent]
})
export class LazyModule {}
