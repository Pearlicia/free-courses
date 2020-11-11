 import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomePage } from './home.page';


const routes: Routes = [
  {
    path: '',
    component: HomePage,
    children: [
      {
        path: 'courses',  
        loadChildren: () => import('../pages/courses/courses.module').then( m => m.CoursesPageModule)
      },
      {
        path: 'contact',
        loadChildren: () => import('../pages/contact/contact.module').then( m => m.ContactPageModule)
      },
      {
        path: 'register',
        loadChildren: () => import('../pages/register/register.module').then( m => m.RegisterPageModule)
      },
      {
        path: 'terms',
        loadChildren: () => import('../pages/terms/terms.module').then( m => m.TermsPageModule)
      },
      {
        path: 'privacy',
        loadChildren: () => import('../pages/privacy/privacy.module').then( m => m.PrivacyPageModule)
      },
      {
        path: 'abot',
        loadChildren: () => import('../pages/abot/abot.module').then( m => m.AbotPageModule)
      },
      {
        path: 'category',
        loadChildren: () => import('../pages/category/category.module').then( m => m.CategoryPageModule)
      },
      {
        path: 'blog/details',
        loadChildren: () => import('../pages/blogitem/blogitem.module').then( m => m.BlogitemPageModule)
      },
      {
        path: 'login',
        loadChildren: () => import('../pages/login/login.module').then( m => m.LoginPageModule)
      },
      
      {
        path: 'create-blog',
        loadChildren: () => 
        import('../pages/create-blog/create-blog.module').then( m => m.CreateBlogPageModule)
      },
     
      
      {
        path: '',
        redirectTo: 'courses',
        pathMatch: 'full'

      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomePageRoutingModule {}
