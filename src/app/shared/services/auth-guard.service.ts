import { AuthService } from './auth.service';
import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService  implements CanActivate {

  constructor(
    private router: Router,
    private authService: AuthService) { }
  canActivate( ) {
    if  ( this.authService.IsLoggedin( ) ) {
    return true;
    }
    this.router.navigate ( ['/login'] ) ;
    return false;


  }
}
