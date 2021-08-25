import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AbboutPageRoutingModule } from './abbout-routing.module';

import { AbboutPage } from './abbout.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AbboutPageRoutingModule
  ],
  declarations: [AbboutPage]
})
export class AbboutPageModule {}
