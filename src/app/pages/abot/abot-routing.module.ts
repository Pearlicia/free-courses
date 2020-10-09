import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AbotPage } from './abot.page';

const routes: Routes = [
  {
    path: '',
    component: AbotPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AbotPageRoutingModule {}
