import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';
import * as firebase from 'firebase/app';
import { from, Observable, of, BehaviorSubject } from 'rxjs';
import { take, switchMap, tap, first } from 'rxjs/operators';
import { Router } from '@angular/router';
import { AngularFireFunctions } from '@angular/fire/functions';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  user: Observable<any>;
  currentUser = new BehaviorSubject(null);

  constructor(
    private afAuth: AngularFireAuth,
    private db: AngularFirestore, 
    private router: Router,
    private aff: AngularFireFunctions) {

    this.user = this.afAuth.authState.pipe(
      switchMap(user => {
        if (user) {
           return this.db.doc(`users/${user.uid}`).valueChanges().pipe(
            take(1),
              tap(data => {
                data['id'] = user.uid;
                this.currentUser.next(data);
              })
            );

              
        } else {
          this.currentUser.next(null);
          return of(null);
        }
      })
    );
  
  }

  signUp(credentials) {
    return this.afAuth.auth.createUserWithEmailAndPassword(credentials.email, credentials.password).then(data => {
      return this.db.doc(`users/${data.user.uid}`).set({
        first_name: credentials.first_name,
        last_name: credentials.last_name,
        email: data.user.email,
        created: firebase.firestore.FieldValue.serverTimestamp()
      });
    });
  }

  signIn(credentials): Observable<any> {
    return from(this.afAuth.auth.signInWithEmailAndPassword(credentials.email, credentials.password)).pipe(
      switchMap(user => {

        // user.user.getIdTokenResult().then((res) => {
        //   if(res.claims.admin) {

        //   }
        // })

        if (user) {
          return this.db.doc(`users/${user.user.uid}`).valueChanges().pipe(
            take(1)
          );
        } else {
          return of(null);
        }
      })
    )
  }

  signOut() {
    return this.afAuth.auth.signOut().then(() => {
      this.router.navigateByUrl('/login');
    });
  }

  hasPermissions(permissions: string[]): boolean {
    for (const perm of permissions) {
      if (!this.currentUser.value || !this.currentUser.value.permissions.includes(perm)) {
        return false;
      }
    }
    return true;
  }

  resetPw(email) {
    return this.afAuth.auth.sendPasswordResetEmail(email);
  }

  setUser(user) {
    this.user = user
  }

  async isAuthenticated() {
    if(this.user) return true

    const user = this.afAuth.authState.pipe(first()).toPromise()
    if(user) {
      this.setUser({
        username: (await user).email.split('@')[0],
        uid: (await user).uid
      })
      return true
    }
    return false
  }
}
