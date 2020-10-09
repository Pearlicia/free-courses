import { Component, OnInit, ViewChild } from '@angular/core';
import { IonTabs } from '@ionic/angular';
import { AngularFireFunctions } from '@angular/fire/functions';
import { AngularFireAuth } from '@angular/fire/auth';
import { AuthService } from "../services/auth.service";
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.page.html',
  styleUrls: ['./tabs.page.scss'],
})
export class TabsPage implements OnInit {
  
  currentUser: any;
  user: any;
  
 // @ViewChild('tabs', {static: true}) tabs: IonTabs

  constructor( 
    private aff: AngularFireFunctions,
    private db: AngularFirestore, 
    private auth: AuthService,
    public afAuth: AngularFireAuth,
    ) { 
      this.afAuth.authState.subscribe(user => {
        if (user) {
          
          this.currentUser = this.afAuth.auth.currentUser; 

          this.currentUser.getIdTokenResult().then(idTokenResult => {
            this.currentUser.admin = idTokenResult.claims.admin;
          })
        }
      });
    }

  ngOnInit() {
     //this.tabs.select('home')
  }

}
