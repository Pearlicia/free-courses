import { Component, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular';
import { DomSanitizer } from '@angular/platform-browser';



@Component({
  selector: 'app-filtercategory',
  templateUrl: './filtercategory.page.html',
  styleUrls: ['./filtercategory.page.scss'],
})
export class FiltercategoryPage implements OnInit {

  categories = [
    { name: 'All', thumb: '../../../assets/img/all.png' },
    { name: 'Free Courses', thumb: '../../../assets/img/freecoursesimg.jpg' },
    { name: 'Blog', thumb: '../../../assets/img/blogimgp.jpg' },
    { name: 'Jobs', thumb: '../../../assets/img/jobimgp.jpg' },
    { name: 'Remote Jobs', thumb: '../../../assets/img/remoteimgp.jpg' },
    { name: 'Nigeria Jobs', thumb: '../../../assets/img/najajobimgp.jpg' },
    { name: 'Scholarships', thumb: '../../../assets/img/scholaimgp.jpg' },
    { name: 'Internships', thumb: '../../../assets/img/internimgp.jpg' },
    { name: 'Programming', thumb: '../../../assets/img/progimgp.jpg' }
    
  ];
  

  constructor(private popoverCtrl: PopoverController,
    private sanitizer: DomSanitizer) { }

  ngOnInit() {
  }

  select(cat) {
    this.popoverCtrl.dismiss({selected: cat});
  }




}
