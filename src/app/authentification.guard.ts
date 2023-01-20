import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthentificationGuard implements CanActivate {
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      let n=localStorage.getItem("token");
      if(n!=null){
        if(parseInt(n)>0){
          return true;
        }
    }
    return false;
  }
  
}
export class DontPasseGuard implements CanActivate {
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      let n=localStorage.getItem("token");
      if(n!=null){
        if(parseInt(n)>0){
          return false;
        }
    }
    return true;
  }
  
}
