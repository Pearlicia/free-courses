import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-blogitem',
  templateUrl: './blogitem.page.html',
  styleUrls: ['./blogitem.page.scss'],
})
export class BlogitemPage implements OnInit {
  blogs = null;

  constructor(private route: ActivatedRoute, private router: Router) {
    this.route.queryParams.subscribe(params => {
      if (this.router.getCurrentNavigation().extras.state) {
        this.blogs = this.router.getCurrentNavigation().extras.state.blogs;
      }
    });
  }

  ngOnInit() {
  }

}
