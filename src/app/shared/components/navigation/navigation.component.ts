import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';

import { AuthService } from  '../../services/auth.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent {

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches)
    );

  constructor(
    private breakpointObserver: BreakpointObserver,
    public authservice: AuthService,
    private router:  Router
  ) {}

  UserLogout( ) {
    this.authservice.logout( );
    this.router.navigate(['/login']);
  }
}
