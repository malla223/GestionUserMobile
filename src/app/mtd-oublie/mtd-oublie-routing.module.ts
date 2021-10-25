import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MtdOubliePage } from './mtd-oublie.page';

const routes: Routes = [
  {
    path: '',
    component: MtdOubliePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MtdOubliePageRoutingModule {}
