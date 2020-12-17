import { Injectable } from '@angular/core';
import { CanActivate, RouterModule, Router } from '@angular/router';
import { LoginService } from '../services/login.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private loginService: LoginService, public appRouting: Router){}

  canActivate(){
    if (localStorage.getItem('User')){
      return true;
    }else {
      this.appRouting.navigate(['login']);
      return false;
    }
  }
}
