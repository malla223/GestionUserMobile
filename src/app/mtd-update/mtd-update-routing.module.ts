import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MtdUpdatePage } from './mtd-update.page';

const routes: Routes = [
  {
    path: '',
    component: MtdUpdatePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MtdUpdatePageRoutingModule {}
