import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { QuillModule } from 'ngx-quill';
import { CreateBlogPageRoutingModule } from './create-blog-routing.module';

import { CreateBlogPage } from './create-blog.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    CreateBlogPageRoutingModule,
    QuillModule.forRoot({
      modules: {
        syntax: false
      }
    })
  ],
  declarations: [CreateBlogPage]
})
export class CreateBlogPageModule {}
