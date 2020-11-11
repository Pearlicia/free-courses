import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BlogitemPageRoutingModule } from './blogitem-routing.module';

import { BlogitemPage } from './blogitem.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BlogitemPageRoutingModule
  ],
  declarations: [BlogitemPage]
})
export class BlogitemPageModule {}
