import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AbboutPage } from './abbout.page';

const routes: Routes = [
  {
    path: '',
    component: AbboutPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AbboutPageRoutingModule {}
