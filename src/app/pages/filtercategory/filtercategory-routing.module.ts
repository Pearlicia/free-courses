import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FiltercategoryPage } from './filtercategory.page';

const routes: Routes = [
  {
    path: '',
    component: FiltercategoryPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FiltercategoryPageRoutingModule {}
