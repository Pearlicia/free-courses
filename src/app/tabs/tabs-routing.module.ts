 import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'home',
        children: [
          {
            path:'',
            loadChildren: () => import('../home/home.module').then( m => m.HomePageModule)
          }
        ]
       
      },
      {
        path: 'contact',
        loadChildren: () => import('../pages/contact/contact.module').then( m => m.ContactPageModule)
      },
      {
        path: 'abot',
        loadChildren: () => 
        import('../pages/abot/abot.module').then( m => m.AbotPageModule)
      },
      {
        path: 'create-blog',
        loadChildren: () => 
        import('../pages/create-blog/create-blog.module').then( m => m.CreateBlogPageModule)
      },
      {
        path: '',
        redirectTo: '/tabs/home/courses',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/home/courses',
    pathMatch: 'full'
  }
];
      
    

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabsPageRoutingModule {}
