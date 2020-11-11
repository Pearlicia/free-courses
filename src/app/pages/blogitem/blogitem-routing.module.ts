import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BlogitemPage } from './blogitem.page';

const routes: Routes = [
  {
    path: '',
    component: BlogitemPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BlogitemPageRoutingModule {}
