import { Component, OnInit, RendererFactory2, Inject, Renderer2 } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { AngularFireFunctions } from '@angular/fire/functions';
import { AngularFireAuth } from '@angular/fire/auth';
import { AuthService } from "../services/auth.service";
import { AngularFirestore } from '@angular/fire/firestore';
import { BlogService } from '../services/blog.service';
import { auth } from 'firebase/app';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  renderer: Renderer2;
  adminForm: FormGroup;
  admin: any;
  currentUser: any;
  user: any;
  
  constructor(
    private fb: FormBuilder, 
    private rendererFactory: RendererFactory2, 
    @Inject(DOCUMENT) private document: Document,
    private aff: AngularFireFunctions,
    private db: AngularFirestore, 
    private auth: AuthService,
    public afAuth: AngularFireAuth,
    private blogService: BlogService) { 
      this.renderer = rendererFactory.createRenderer(null, null);
      this.afAuth.authState.subscribe(user => {
        if (user) {
          
          this.currentUser = this.afAuth.auth.currentUser; 

        }
      });
    }

  ngOnInit() {   
  }

  enableLight() {
    this.renderer.removeClass(this.document.body, 'dark-theme');
  }

  enableDark() {
    this.renderer.addClass(this.document.body, 'dark-theme');
  } 

}
