import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AbotPageRoutingModule } from './abot-routing.module';

import { AbotPage } from './abot.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AbotPageRoutingModule
  ],
  declarations: [AbotPage]
})
export class AbotPageModule {}
