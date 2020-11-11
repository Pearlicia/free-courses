import { Component, OnInit } from '@angular/core';
import { AngularFireFunctions } from '@angular/fire/functions';
import { AngularFireAuth } from '@angular/fire/auth';
import { AuthService } from "../../services/auth.service";
import { AngularFirestore } from '@angular/fire/firestore';
import { BlogService } from '../../services/blog.service';
import { Blog } from '../../interfaces/blog';
import { ModalController, IonList, PopoverController, Platform } from '@ionic/angular';
import { PopoverPage } from '../popover/popover.page';
import { CouponPage } from '../coupon/coupon.page';
import { SocialSharing } from '@ionic-native/social-sharing/ngx';
import { AdMobFree, AdMobFreeBannerConfig } from '@ionic-native/admob-free/ngx';
import { NavigationExtras, Router } from '@angular/router';
import { FiltercategoryPage } from '../filtercategory/filtercategory.page';



@Component({
  selector: 'app-courses',
  templateUrl: './courses.page.html',
  styleUrls: ['./courses.page.scss'],
})
export class CoursesPage implements OnInit {
  currentUser: any;
  user: any;
  p: number = 1;

  selected = 'Free Courses';

  blogs: Blog[];
  blogs2: Blog[];
  allBlogs: Blog[];
  searchTerm = '';
  sentTimestamp: Date;
  blogAuthor: any;
  urllink: any;
  

  constructor(
    private aff: AngularFireFunctions,
    private db: AngularFirestore, 
    private auth: AuthService,
    private platform: Platform,
    private router: Router,
    public afAuth: AngularFireAuth,
    private socialSharing: SocialSharing,
    private admobFree: AdMobFree,
    public modalController: ModalController,
    public popoverController: PopoverController,
    private blogService: BlogService) { 
      this.afAuth.authState.subscribe(user => {
        if (user) {
         this.currentUser = this.afAuth.auth.currentUser; 
        }
      });

      platform.ready().then(() => {
        this.showAdmobBannerAds();
      });
    }

  ngOnInit() {
    this.blogService.getBlogs().subscribe(res => {
      this.blogs = res;
      this.allBlogs = res;
      this.blogs2 = this.blogs;
      this.blogs.sort((a, b) => {
        return b.createdAt - a.createdAt
      })
    }); 

  }

  open(blog) {
    let navigationExtras: NavigationExtras = {
      state: {
        blogs: blog
      }
    };
    this.router.navigate(['/blog/details'], navigationExtras);
  }
 

  showAdmobBannerAds(){
    const bannerConfig: AdMobFreeBannerConfig = {
      id: 'ca-app-pub-2349614409429702/3850589521',
      isTesting: false,
      autoShow: true,
      bannerAtTop: false
     };
     this.admobFree.banner.config(bannerConfig);
     
     this.admobFree.banner.prepare()
     .then(() => {
      // banner Ad is ready
      // if we set autoShow to false, then we will need to call the show method here
    })
    .catch(e => console.log(e));
  }


  sShare() {
    var options = {
      message: 'Ionic Share', // not supported on some apps (Facebook, Instagram)
      //subject: 'the subject', // fi. for email
      //files: ['', ''], // an array of filenames either locally or remotely
      url: 'https://ionicframework.com/docs/native/social-sharing',
      //chooserTitle: 'Pick an app', // Android only, you can override the default share sheet title
      //appPackageName: 'com.apple.social.facebook', // Android only, you can provide id of the App you want to share with
      };
      this.socialSharing.shareWithOptions(options);
  }
  
    // search function
  
    filterList() {
      const val = this.searchTerm;
      this.blogs = this.blogs2;
      if ( val && val.trim() !== '' ) {
        this.blogs = this.blogs.filter((item) => {
          return (item.author.toLowerCase().indexOf(val.toLowerCase()) > -1);
        });
      }
    }

    async openFilter(e) {
      const popover = await this.popoverCtrl.create({
        component: FiltercategoryPage,
        event: e
      });
      await popover.present();
  
      popover.onDidDismiss().then(res => {
        if (res && res.data) {
          let selectedName = res.data.selected.name;
  
          if (selectedName == 'All') {
            this.blogs = this.allBlogs;
          } else {
            this.blogs = this.allBlogs.filter(blog => {
              return blog.category == selectedName;
            });
          }
        }
      })
    }
        

   
    

    async openPopover(){
      const popover = await this.popoverController.create({
        component: PopoverPage,
        showBackdrop:false
      }).then((popoverElement) => {
        popoverElement.present();
      });
      
    }

    

   
  }

    


