import { Component, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular';
import { BlogService } from '../../services/blog.service';
import { Blog } from '../../interfaces/blog';

@Component({
  selector: 'app-popover',
  templateUrl: './popover.page.html',
  styleUrls: ['./popover.page.scss'],
})
export class PopoverPage implements OnInit {
  blogs: Blog[];

  constructor(
    private popover: PopoverController,
    private blogService: BlogService
    ) { }

  ngOnInit() {
    this.blogService.getBlogs().subscribe(res => {
      this.blogs = res;
    });
  }

  closePopover() {
    this.popover.dismiss();
  }

}
