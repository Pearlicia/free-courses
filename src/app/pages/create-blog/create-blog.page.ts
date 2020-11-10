import { Component, OnInit, ViewChild } from '@angular/core';
import { Blog } from './../../interfaces/blog';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { BlogService } from '../../services/blog.service';
import { LoadingController, NavController, Platform } from '@ionic/angular';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/auth';
import { Quill } from 'quill';
import { ImageUpload } from 'quill-image-upload';
import { AngularFireStorage } from '@angular/fire/storage';
import { Observable } from "rxjs";
import { finalize } from "rxjs/operators";
import { AngularFireFunctions } from '@angular/fire/functions';
import { AuthService } from "../../services/auth.service";
import { AngularFirestore } from '@angular/fire/firestore';
import { Router } from '@angular/router';
import { blogSubjects } from '../../../assets/data/category';



@Component({
  selector: 'app-create-blog',
  templateUrl: './create-blog.page.html',
  styleUrls: ['./create-blog.page.scss'],
})
export class CreateBlogPage implements OnInit {
  adminForm: FormGroup;
  currentUser: any;
  user: any;

  blog: Blog;
  uploadPercent: Observable<number>;
  downloadURL: Observable<string>;

  blogId = null;
  public blogForm: FormGroup;
  cordova: boolean;
  blogTitle: string;
  category: string;
  createdAt: number;
  selectedFile: any;
  image;
  public blogSubjects = blogSubjects;

  // @ViewChild('blogSlider', {static: true}) blogSlider;

  constructor(private blogService: BlogService,
    private route: ActivatedRoute,
    public platform: Platform,
    private storage: AngularFireStorage,
    private loadingController: LoadingController,
    private nav: NavController,
    private aff: AngularFireFunctions,
    private db: AngularFirestore, 
    private router: Router,
    private auth: AuthService,
    public afAuth: AngularFireAuth,
    private formBuilder: FormBuilder) {
    // Quill.register('modules/imageUpload', ImageUpload);
    platform.is('cordova') ? this.cordova = true : this.cordova = false;
    this.blogForm = this.formBuilder.group({
      subject: ['', Validators.compose([ Validators.required])],
      coupon: ['', Validators.compose([ Validators.required])],
      category: ['', Validators.required],
      url: ['', Validators.compose([ Validators.required])],
      summary: ['', Validators.compose([ Validators.required])],
      imageUrl: ['', Validators.required],
      file: ['', Validators.required],
      body: ['', Validators.compose([Validators.maxLength(1000), Validators.required])]
    })
    this.afAuth.authState.subscribe(user => {
      // this.currentUser = user.email;
      this.createdAt = new Date().getTime();

      //this.blogTitle = this.currentUser + " Blog for " + this.createdAt;
    
      if (user) {
        
        this.currentUser = this.afAuth.auth.currentUser; 
        

        this.currentUser.getIdTokenResult().then(idTokenResult => {
          this.currentUser.admin = idTokenResult.claims.admin;
        })
      }
    });
    
    
  }

  ngOnInit() {
    this.blogId = this.route.snapshot.params['id'];
    if (this.blogId) {
      this.loadBlog();
    }

    this.adminForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]]
    });

  } 

  
  async loadBlog() {
    const loading = await this.loadingController.create({
      message: 'Loading Blog..'
    });
    await loading.present();

     this.blogService.getBlog(this.blogId).subscribe(blog => {
      loading.dismiss(); 
      this.blog = blog;
     });
  }

  
  async saveBlog() {
    this.createdAt = new Date().getTime();
    const formVal = this.blogForm.value;
    this.blog = {
      createdAt: this.createdAt,
      subject: formVal.subject,
      coupon: formVal.coupon,
      category: formVal.category,
      url: formVal.url,
      summary: formVal.summary,
      body: formVal.body,
      file: formVal.file,
      imageUrl: formVal.imageUrl,
     // author: this.currentUser
    }
    
    const loading = await this.loadingController.create({
      message: 'Saving Blog...'
    });
    await loading.present();

    this.blogService.createBlog(this.blog).then(() => {
       loading.dismiss();
       this.router.navigate(['/home/courses'])
    });
    
  }

  chooseFile(event) {
    const selectedFile = event.target.files[0];
    const randomId = Math.random().toString(36).substring(2);
    const filePath = `images/${randomId}`;
    const fileRef = this.storage.ref(filePath);
    const task = this.storage.upload(filePath, selectedFile);
    console.log(selectedFile);

        // observe percentage changes
    this.uploadPercent = task.percentageChanges();
    // get notified when the download URL is available
    task.snapshotChanges().pipe(
        finalize(() => {
          this.downloadURL = fileRef.getDownloadURL() 
          console.log(this.downloadURL)
          this.downloadURL.subscribe(value => {
            this.blogForm.controls.imageUrl.patchValue(value);
          })
        })
    )
    .subscribe()
  }

  async signOut() {
    this.afAuth.auth.signOut().then(() => {
      console.log('successful logout');
      this.currentUser = null;
      this.currentUser.admin = null;
      
    });
  }

  async makeAdmin() {
    const adminEmail = this.adminForm.value.email;
    const addAdminRole = this.aff.httpsCallable('addAdminRole');
    addAdminRole({ email: adminEmail }).subscribe(result => {
     console.log(result);
   });
 }
  

}
