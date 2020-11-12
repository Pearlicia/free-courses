import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { RouteReuseStrategy } from "@angular/router";
import {  MatCardModule,  MatButtonModule, MatIconModule, 
  MatFormFieldModule,} from '@angular/material';

import { IonicModule, IonicRouteStrategy } from "@ionic/angular";
import { SplashScreen } from "@ionic-native/splash-screen/ngx";
import { StatusBar } from "@ionic-native/status-bar/ngx";
import { PopoverPageModule } from './pages/popover/popover.module';
import { CouponPageModule } from './pages/coupon/coupon.module';
import { AppComponent } from "./app.component";
import { AppRoutingModule } from "./app-routing.module";
import { QuillModule } from 'ngx-quill';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireAuthModule } from "@angular/fire/auth";
import { AngularFirestoreModule } from "@angular/fire/firestore";
import { AngularFireModule } from "@angular/fire";
import { AngularFireFunctionsModule, FunctionsRegionToken } from '@angular/fire/functions';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { environment } from './../environments/environment';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SocialSharing } from '@ionic-native/social-sharing/ngx';
import { AdMobFree } from '@ionic-native/admob-free/ngx';
import { FiltercategoryPageModule } from '../app/pages/filtercategory/filtercategory.module';
import { BloglistPageModule } from '../app/pages/bloglist/bloglist.module';
import { BlogdetailPageModule } from '../app/pages/blogdetail/blogdetail.module';

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    AngularFireStorageModule,
    MatCardModule,
    FiltercategoryPageModule,
    BloglistPageModule,
    BlogdetailPageModule,
    MatButtonModule,
    MatIconModule,
    MatFormFieldModule,
    AngularFireDatabaseModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    AngularFireAuthModule,
    PopoverPageModule,
    CouponPageModule,
    AngularFireFunctionsModule,
    QuillModule.forRoot({
      modules: {
        syntax: false
      }
    }),
    BrowserAnimationsModule
  ],
  providers: [
    StatusBar,
    SplashScreen,
    SocialSharing,
    AdMobFree,
    InAppBrowser,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    { provide: FunctionsRegionToken, useValue: 'us-central1'}
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
