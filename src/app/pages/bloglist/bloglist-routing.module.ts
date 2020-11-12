import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BloglistPage } from './bloglist.page';

const routes: Routes = [
  {
    path: '',
    component: BloglistPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BloglistPageRoutingModule {}
