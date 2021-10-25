import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MtdUpdatePageRoutingModule } from './mtd-update-routing.module';

import { MtdUpdatePage } from './mtd-update.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MtdUpdatePageRoutingModule
  ],
  declarations: [MtdUpdatePage]
})
export class MtdUpdatePageModule {}
