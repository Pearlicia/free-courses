import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { AuthService } from './auth.service';


@Injectable({
  providedIn: 'root'
})
export class UserService implements CanActivate {

  constructor(
    private router: Router,
    private auth: AuthService) { }

    async canActivate(route) {
      if(await this.auth.isAuthenticated()){
        return true
      }
      this.router.navigate(['/login'])
      return false
    }
}
