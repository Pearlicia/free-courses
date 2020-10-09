import { Component, OnInit } from '@angular/core';
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
  adminForm: FormGroup;
  admin: any;
  currentUser: any;
  user: any;
  isAdmin: boolean = false;
  

  constructor(private fb: FormBuilder, 
    private aff: AngularFireFunctions,
    private db: AngularFirestore, 
    private auth: AuthService,
    public afAuth: AngularFireAuth,
    private blogService: BlogService) { 
      this.afAuth.authState.subscribe(user => {
        if (user) {
          
          this.currentUser = this.afAuth.auth.currentUser; 
          console.log(this.currentUser);

          // this.currentUser.getIdTokenResult().then(idTokenResult => {
          //   if (idTokenResult.claims.admin) {
          //     this.isAdmin = true;
          //   }
          // })
        }
      });
    }

  ngOnInit() {
    this.adminForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]]
    });
    this.afAuth.authState.subscribe((user) => {
      user.getIdTokenResult().then(value => {
        if (value.claims.admin) {
          console.log('User is an admin')
          this.isAdmin = true;
        }
      })
    })
   
  }

    
    
  async signOut() {
    this.afAuth.auth.signOut().then(() => {
      console.log('successful logout');
      this.currentUser = null;
      this.currentUser.admin = null;
      // future modal to confirm
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
