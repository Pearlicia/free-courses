import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { Component, OnInit, ViewChild } from '@angular/core';
import { IonTabs } from '@ionic/angular';
import { AngularFireFunctions } from '@angular/fire/functions';
import { AngularFireAuth } from '@angular/fire/auth';
import { AuthService } from "./services/auth.service";
import { AngularFirestore } from '@angular/fire/firestore';


@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  rootPage:any = 'TabsPage';
  currentUser: any;
  user: any;

  constructor(
    private platform: Platform,
    private aff: AngularFireFunctions,
    private db: AngularFirestore, 
    private auth: AuthService,
    public afAuth: AngularFireAuth,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar
  ) {
    this.initializeApp();
    this.afAuth.authState.subscribe(user => {
      if (user) {
        
        this.currentUser = this.afAuth.auth.currentUser; 
        console.log(this.currentUser);

        // this.currentUser.getIdTokenResult().then(idTokenResult => {
        //   this.currentUser.admin = idTokenResult.claims.admin;
        // })
      }
    });
  }hj

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
}
