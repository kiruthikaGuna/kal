import { Injectable } from '@angular/core';
import { Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService {

  constructor(private router: Router) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    if (localStorage.getItem('userid')) {
      return true;
    } else {
      this.router.navigate(['/authentication']);
      localStorage.clear();
    }
    return false;
  }


  canActivateChild(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    if (localStorage.getItem('userid')) {
      return true;
    } else {
      this.router.navigate(['/authentication']);
      localStorage.clear();
    }
    return false;
  }
}
