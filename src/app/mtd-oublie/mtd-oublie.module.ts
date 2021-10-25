import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MtdOubliePageRoutingModule } from './mtd-oublie-routing.module';

import { MtdOubliePage } from './mtd-oublie.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MtdOubliePageRoutingModule
  ],
  declarations: [MtdOubliePage]
})
export class MtdOubliePageModule {}
