import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FiltercategoryPageRoutingModule } from './filtercategory-routing.module';

import { FiltercategoryPage } from './filtercategory.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FiltercategoryPageRoutingModule
  ],
  declarations: [FiltercategoryPage]
})
export class FiltercategoryPageModule {}
