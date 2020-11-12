import { NgModule } from '@angular/core';

import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { UserService } from './services/user.service';

const routes: Routes = [
   //{ path: '', redirectTo: 'login', pathMatch: 'full' },
  // {
  //   path: '',
  //   loadChildren: () => import('./tabs/tabs.module').then( m => m.TabsPageModule),
    
  // },

  {
    path:'',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)
  },   {
    path: 'logout',
    loadChildren: () => import('./pages/logout/logout.module').then( m => m.LogoutPageModule)
  },
  
  {
    path: 'bloglist',
    loadChildren: () => import('./pages/bloglist/bloglist.module').then( m => m.BloglistPageModule)
  },
  {
    path: 'blogdetail',
    loadChildren: () => import('./pages/blogdetail/blogdetail.module').then( m => m.BlogdetailPageModule)
  }
   
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
